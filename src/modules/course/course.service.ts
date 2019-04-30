import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class CourseService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }

    public getCourse() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from course", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getICourse(idCurse: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from course where idcourse = ?", [idCurse],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateCourse(idCurse: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from course where idcourse= ?", [idCurse],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
