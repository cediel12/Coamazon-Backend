import { ObjectService } from './object.service';
import { Controller, Get, HttpStatus, Request, Response, Param } from '@nestjs/common';

@Controller('object')
export class ObjectController {
    constructor(private readonly objectService: ObjectService){}

    @Get('getAll')
    public async getUser(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.objectService.getObject();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findObject/:idObject')
    public async findUser(
        @Request() req,
        @Response() res,
        @Param('idObject') idObject
    ) {
        
        const user = await this.objectService.getIObject(idObject);
        res.status(HttpStatus.OK).json(user);
    }
}
