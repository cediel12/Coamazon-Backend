import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { promises } from 'fs';
import { resolve } from 'dns';
import { rejects } from 'assert';

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
            this.connection.query("select * from teacher", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getUser(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from teacher where id_teacher = ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
