import { User } from './user.interface';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
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
            this.connection.query("DELETE FROM user WHERE iduser=?", [idUser], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getUser(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from user where iduser = ?", [idUser], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateUser(user: User) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE user SET name=?,lastname=?,email=? WHERE iduser = ?", [user.name, user.lastname, user.email, user.idUser], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public createUserTeacher(user: User) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createteacher(?, ?, ?, ?, ?)",
                [user.username, user.password, user.name, user.lastname, user.email], (err, result) => {
                    return !err
                        ? resolve({ message: 'Teacher creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public createUserStudens(user: User) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createstudens(?, ?, ?, ?, ?,?)",
                [user.username, user.password, user.name, user.lastname, user.email, user.user_iduser], (err, result) => {
                    return !err
                        ? resolve({ message: 'Studens creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
}
/* public async getUsers() {
        try {
            const users = await this.connection.query('select * from teacher')
            console.log(users.results)
            return await users[0]
        } catch (error) {
            return await new BadRequestException(error.message)
        }
    } */