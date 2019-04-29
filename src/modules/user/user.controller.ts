import { UserService } from './user.service';
import { Controller, Get, Request, Response, HttpStatus, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Get('getAll')
    public async getUser(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.UserService.getUsers();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findUser/:idUser')
    public async findUser(
        @Request() req,
        @Response() res,
        @Param('idUser') idUser
    ) {
        
        const user = await this.UserService.getUser(idUser);
        res.status(HttpStatus.OK).json(user);
    }
}
