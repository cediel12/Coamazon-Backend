import { User } from './../user/user.interface';
import { Injectable, UnauthorizedException, BadRequestException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt'
import { CryptoService } from "./crypto.service";
import { JwtPayload } from "./interface/jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private cryptoService: CryptoService
    ) { }
    public async createToken(user) {
        const accessTocken = this.jwtService.sign({
            username: user['username'],
            password: user['password']
        } as JwtPayload);
        return { expiresIn: 3600, accessTocken }
    }
    public async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.userService.findUsername(payload.username);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
    public async signUp(user: User) {
        try {
            user.password = await this.cryptoService.hashPassword(user.password);//Hash del
            const response = await this.userService.createUserStudens(user);
            if (!response['createuser']) { // verificamos que se haya creado el usuario
                return new UnauthorizedException('User Creado');;
            }
            return await this.createToken(user);
        } catch (error) {
            return new BadRequestException(error);
        }
    }
    async signIn(username, password): Promise<any> {
        try {
            const user = await this.userService.findUsername(username);
            if (!user) {
                return new UnauthorizedException('User not exists');
            } else {
                const veracity: boolean = await this.cryptoService.checkPassword(user[0].password, password)
                if (veracity) {
                    let data = {
                        iduser: user[0].iduser,
                        username: user[0].username,
                        name: user[0].name,
                        lastname: user[0].lastname,
                        role: user[0].rol_idrol,
                        accessTocken: null
                    }
                    this.createToken(user).then(res => data.accessTocken = res['accessTocken'])                    
                    return data;
                } else {
                    return new UnauthorizedException('Invalid password');
                }

            }
        } catch (err) {
            return err;
        }
    }
}