import { ThemeService } from './theme.service';
import { Controller, HttpStatus, Request, Response, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { Theme } from './theme.interface';

@Controller('theme')
export class ThemeController {
    constructor(private readonly themeService: ThemeService){}
    @Get('getAll')
    public async getTheme(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.themeService.gettheme();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findTheme/:idteheme')
    public async findTheme(
        @Request() req,
        @Response() res,
        @Param('idteheme') idteheme
    ) {
        
        const user = await this.themeService.getTheme(idteheme);
        res.status(HttpStatus.OK).json(user);
    }

    @Post('createTheme')
    public async createTheme(
        @Request() req,
        @Response() res,
        @Body('theme') theme,
        @Body('description') description,
        @Body('Department_idDepartment') Department_idDepartment
    ) {
        let Theme: Theme = {
            theme:theme,
            description:description,
            Department_idDepartment:Department_idDepartment
        }
        console.log(Theme)
        const response = await this.themeService.createTheme(Theme);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteTheme/:idtheme')
    public async deleteTheme(
        @Request() req,
        @Response() res,
        @Param('idtheme') idtheme
    ) {
        
        const user = await this.themeService.deleteTheme(idtheme);
        res.status(HttpStatus.OK).json(user);
    }
    @Put('updateTheme')
    public async updateTheme(
        @Request() req,
        @Response() res,
        @Body('idtheme') idtheme,
        @Body('theme') theme,
        @Body('description') description
    ) {
        let Theme: Theme = {
            idtheme:idtheme,
            theme:theme,
            description:description
        }
        console.log(Theme)
        const response = await this.themeService.updateTheme(Theme);
        res.status(HttpStatus.OK).json(response);
    }
}