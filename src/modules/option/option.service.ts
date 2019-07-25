import { UnauthorizedException } from '@nestjs/common';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { Option } from './option.interface';
import { parse } from 'path';

@Injectable()
export class OptionService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public getoption() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from option", (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteOption(idOption: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM option WHERE idtheme=?", [idOption], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getOption(idOption: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from option where iduser = ?", [idOption], (err, result) => {
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
                    return !err
                        ? resolve(result)
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public createOption(option : string, veraciity : number, idquestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createoption(?, ?, ?)",
                [option,veraciity,idquestion], (err, result) => {
                    return !err
                        ? resolve({ message: 'Option creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public async validateoption(option: number){
        return new Promise((resolve, reject) => {
            this.connection.query
            ("SELECT * FROM Coamazon.questions inner join Coamazon.option on idquestions=questions_idquestions where idoption=?",
             [option], (err, result) => {
                return !err
                    ? resolve(JSON.parse(JSON.stringify(result)))
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    async validateOption(option): Promise<any> {
        try {
            const validateoption = await this.validateoption(option);
            const veracity:boolean =  validateoption[0].veracity;
            return veracity? validateoption : new UnauthorizedException('Invalid Option');          
        } catch (err) {
            return err;
        }
    }
}
