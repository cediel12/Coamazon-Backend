import { SubTheme } from './subtheme.interface';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class SubthemeService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public getsubtheme() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from subtheme", (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteSubtheme(idSubteme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM subtheme WHERE idsubtheme=?", [idSubteme], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getSubTheme(idSubteme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from subtheme where idsubtheme = ?", [idSubteme], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateSubTheme(subtheme: SubTheme) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE subtheme SET name=?,image=?,description=? WHERE idsubtheme = ?", 
            [subtheme.name,subtheme.image,subtheme.description,subtheme.idsubtheme], (err, result) => {
                console.log(result);
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public createSubTheme(subtheme: SubTheme) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createsubtheme(?, ?,?,?)",
                [subtheme.name,subtheme.image,subtheme.description,subtheme.theme_idtheme], (err, result) => {
                    return !err
                        ? resolve({ message: 'Theme creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
}
