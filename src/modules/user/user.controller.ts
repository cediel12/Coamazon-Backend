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

    @Post('createUserteacher')
    public async createUserteacher(
        @Request() req,
        @Response() res,
        @Body('username') userName,
        @Body('password') password,
        @Body('name') name,
        @Body('lasname') lastname,
        @Body('email') email

    ) {
        let user: User = {
            email:email,
            username:userName,
            password:password,
            name:name,
            lastname:lastname
        }
        console.log(user)
        const response = await this.UserService.createUserTeacher(user);
        res.status(HttpStatus.OK).json(response);
    }
    @Post('createUserstudens')
    public async createUserStudens(
        @Request() req,
        @Response() res,
        @Body('username') userName,
        @Body('password') password,
        @Body('name') name,
        @Body('lasname') lastname,
        @Body('email') email,
        @Body('user_iduser') user_iduser
    ) {
        let user: User = {
            email:email,
            username:userName,
            password:password,
            name:name,
            lastname:lastname,
            user_iduser:user_iduser
        }
        console.log(user)
        const response = await this.UserService.createUserStudens(user);
        res.status(HttpStatus.OK).json(response);
    }
    @Put('updateUser')
    public async updateUser(
        @Request() req,
        @Response() res,
        @Body('name') name,
        @Body('lasname') lastname,
        @Body('email') email
    ) {
        let user: User = {
            name:name,
            lastname:lastname,
            email:email
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
        
        const user = await this.UserService.deleteuser(idUser);
        res.status(HttpStatus.OK).json(user);
    }
}
