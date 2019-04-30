import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class DepartmentService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }

    public getDepartament() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from departament", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getIDepartament(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from departament where iddepartament = ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateDepartament(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from departament where iddepartament= ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
