import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { Option } from './option.interface';

@Injectable()
export class OptionService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public getoption() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from option", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteOption(idOption: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM option WHERE idtheme=?", [idOption], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getOption(idOption: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from option where iduser = ?", [idOption], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateOption(option: Option) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE option SET option=?,veracity=? WHERE idoption = ?",
                [option.option,option.veracity,option.idoption], (err, result) => {
                    console.log(result);
                    return !err
                        ? resolve(result)
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public createOption(option: Option) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createoption(?, ?, ?)",
                [option.questions_idquestions,option.option,option.veracity], (err, result) => {
                    return !err
                        ? resolve({ message: 'Option creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
}
