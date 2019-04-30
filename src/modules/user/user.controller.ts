import { User } from './user.interface';
import { UserService } from './user.service';
import { Controller, Get, Request, Response, HttpStatus, Param, Post, Body, Put, Delete } from '@nestjs/common';

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

    @Post('createUser')
    public async createUser(
        @Request() req,
        @Response() res,
        @Body('username') userName,
        @Body('password') password,
        @Body('name') name,
        @Body('lasname') lastname,
        @Body('idrol') idrol

    ) {
        let user: User = {
            idRol:idrol,
            username:userName,
            password:password,
            name:name,
            lastname:lastname
        }
        console.log(user)
        const response = await this.UserService.createUser(user);
        res.status(HttpStatus.OK).json(response);
    }
    @Put('updateUser')
    public async updateUser(
        @Request() req,
        @Response() res,
        @Body('username') userName,
        @Body('password') password,
        @Body('name') name,
        @Body('lasname') lastname,
        @Body('idrol') idrol,
        @Body('idrol') iduser


    ) {
        let user: User = {
            idRol:idrol,
            username:userName,
            password:password,
            name:name,
            lastname:lastname
        }
        console.log(user)
        const response = await this.UserService.updateUser(user);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteUser/:idUser')
    public async deleteUser(
        @Request() req,
        @Response() res,
        @Param('idUser') idUser
    ) {
        
        const user = await this.UserService.getUser(idUser);
        res.status(HttpStatus.OK).json(user);
    }
}
