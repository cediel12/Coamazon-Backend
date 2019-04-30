import { DepartmentService } from './department.service';
import { Controller, Get, HttpStatus, Request, Response, Param } from '@nestjs/common'

@Controller('department')
export class DepartmentController {
    constructor(private readonly departamentService: DepartmentService){}

    @Get('getAll')
    public async getUser(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.departamentService.getDepartament();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findDepartament/:idDepartament')
    public async findUser(
        @Request() req,
        @Response() res,
        @Param('idDepartament') idDepartament
    ) {
        
        const user = await this.departamentService.getIDepartament(idDepartament);
        res.status(HttpStatus.OK).json(user);
    }
}
