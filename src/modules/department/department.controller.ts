import { Department } from './department.interface';
import { DepartmentService } from './department.service';
import { Controller, Get, HttpStatus, Request, Response, Param, Body, Post, Put, Delete } from '@nestjs/common'

@Controller('department')
export class DepartmentController {
    constructor(private readonly departamentService: DepartmentService){}

    @Get('getAll')
    public async getDepartament(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.departamentService.getDepartament();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findDepartament/:idDepartament')
    public async findDepartament(
        @Request() req,
        @Response() res,
        @Param('idDepartament') idDepartament
    ) {
        
        const user = await this.departamentService.getIDepartament(idDepartament);
        res.status(HttpStatus.OK).json(user);
    }
    @Post('crearDepartment')
    public async crearDepartment(
        @Request() req,
        @Response() res,
        @Body('capital') capital,
        @Body('flag') flag

    ) {
        let departament: Department = {
            capital:capital,
            flag:flag
        }
        const response = await this.departamentService.crearDepartment(departament);
        res.status(HttpStatus.OK).json(response);
    }
    @Put('updateDepartament')
    public async updateDepartament(
        @Request() req,
        @Response() res,
        @Body('capital') capital,
        @Body('flag') flag,
        @Body('iddepartamento') iddepartamento
    ) {
        let Departament: Department = {
            flag:flag,
            capital:capital,
            iddepartamento: iddepartamento
        }
        const response = await this.departamentService.updateDepartament(Departament);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteDepartament/:idDepartament')
    public async deleteDepartament(
        @Request() req,
        @Response() res,
        @Param('idDepartament') idDepartament
    ) {
        
        const user = await this.departamentService.deleteDepartament(idDepartament);
        res.status(HttpStatus.OK).json(user);
    }
}
