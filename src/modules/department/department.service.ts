import { Department } from './department.interface';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class DepartmentService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }

    public getDepartament() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from Department", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getIDepartament(idDepartment: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from departament where iddepartament = ?", [idDepartment],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateDepartament(departament: Department) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE Department SET capital=?,flag=? WHERE idDepartment = ?", [departament.capital,departament.flag,departament.iddepartamento],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public crearDepartment(departament: Department) {
        return new Promise((resolve, reject) => {
            this.connection.query("INSERT INTO Department VALUES (1,?, ?)",
             [departament.capital,departament.flag],(err, result) => {
                return !err
                    ? resolve({message: 'Departament creado Correctamente'})
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteDepartament(idDepartment: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM Department WHERE idDepartment=?", [idDepartment],(err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
