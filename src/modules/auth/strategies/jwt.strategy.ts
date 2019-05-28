import { Injectable, HttpException, HttpStatus, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from "../auth.service";
import { JwtPayload } from "../interface/jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey'
        })
    }

    async validate(payload: JwtPayload, done: Function) {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            return done(new UnauthorizedException(),false);
        }
        done (null,user);
    }
}