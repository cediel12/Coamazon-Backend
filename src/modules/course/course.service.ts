import { Course } from './course.interface';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class CourseService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }

    public getCourse() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from course", (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getICourse(idCurse: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from course where idcourse = ?", [idCurse],(err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateCourse(course: Course) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from course where idcourse= ?", [course],(err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteCourse(idCurse: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM course WHERE idcourse=?", [idCurse],(err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public createCourse(course: Course) {
        return new Promise((resolve, reject) => {
            this.connection.query("INSERT INTO user (iduser,username, password, name, lastname, rol_idrol) VALUES (1,?, ?, ?, ?, ?)",
             [course],(err, result) => {
                return !err
                    ? resolve({message: 'Course creado Correctamente'})
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
