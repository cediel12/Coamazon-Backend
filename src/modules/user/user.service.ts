import { User } from './user.interface';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }

    /* public async getUsers() {
        try {
            const users = await this.connection.query('select * from teacher')
            console.log(users.results)
            return await users[0]
        } catch (error) {
            return await new BadRequestException(error.message)
        }
    } */

    public getUsers() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from user", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteuser(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM user WHERE iduser=?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getUser(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from user where iduser = ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateUser(user: User) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from teacher where user = ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public createUser(user: User) {
        return new Promise((resolve, reject) => {
            this.connection.query("INSERT INTO user (iduser,username, password, name, lastname, rol_idrol) VALUES (1,?, ?, ?, ?, ?)",
             [user.username ,user.password,user.name, user.lastname,user.idRol],(err, result) => {
                return !err
                    ? resolve({message: 'Usuario creado Correctamente'})
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
