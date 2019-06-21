import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Theme } from './theme.interface';

@Injectable()
export class ThemeService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public gettheme() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from theme", (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteTheme(idTheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM theme WHERE idtheme=?", [idTheme], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public getTheme(idTheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from theme where idtheme = ?", [idTheme], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public LoadThemesDepartment(idTheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT theme_idtheme,description FROM Coamazon.departament inner join Coamazon.theme_has_departament on theme_has_departament.departament_iddepartament=departament.iddepartament inner join Coamazon.theme on theme.idtheme=theme_has_departament.theme_idtheme where iddepartament = ?",
                [idTheme], (err, result) => {
                    return !err
                        ? resolve(result)
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public updateTheme(theme: Theme) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE theme SET thema=?,description=? WHERE idtheme = ?", [theme.theme, theme.description, theme.idtheme], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public createTheme(theme: Theme) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createtheme(?, ?,?)",
                [theme.theme, theme.description, theme.Department_idDepartment], (err, result) => {
                    return !err
                        ? resolve({ message: 'Theme creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
}
