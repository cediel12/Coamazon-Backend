import { Injectable, BadRequestException, Inject } from '@nestjs/common';
@Injectable()
export class ObjectService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }

    public getObject() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from object", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getIObject(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from object where idobject = ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateObject(idUser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from object where idobject = ?", [idUser],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
