import { SubTheme } from './subtheme.interface';
import { SubthemeService } from './subtheme.service';
import { Controller, HttpStatus, Request, Response, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';

@Controller('subtheme')
export class SubthemeController {
    constructor(private readonly subthemeService: SubthemeService){}
    @Get('getAll')
    public async getSubtheme(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.subthemeService.getsubtheme();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findSubTheme/:idSubTheme')
    public async findSubtheme(
        @Request() req,
        @Response() res,
        @Param('idSubTheme') idteheme
    ) {
        
        const user = await this.subthemeService.getSubTheme(idteheme);
        res.status(HttpStatus.OK).json(user);
    }

    @Post('createSubTheme')
    public async createSubTheme(
        @Request() req,
        @Response() res,
        @Body('name') name,
        @Body('image') image,
        @Body('description') description,
        @Body('theme_idtheme') theme_idtheme,
    ) {
        let subTheme: SubTheme = {
            theme_idtheme:theme_idtheme,
            description:description,
            image:image,
            name:name
        }
        const response = await this.subthemeService.createSubTheme(subTheme);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteSubTheme/:idSubtheme')
    public async deleteSubtheme(
        @Request() req,
        @Response() res,
        @Param('idSubtheme') idtheme
    ) {
        
        const user = await this.subthemeService.deleteSubtheme(idtheme);
        res.status(HttpStatus.OK).json(user);
    }
    @Put('updateSubTheme')
    public async updateSubtheme(
        @Request() req,
        @Response() res,
        @Body('name') name,
        @Body('image') image,
        @Body('description') description,
        @Body('idsubtheme') idsubtheme
    ) {
        let subTheme: SubTheme = {
            idsubtheme:idsubtheme,
            description:description,
            image:image,
            name:name
        }
        const response = await this.subthemeService.updateSubTheme(subTheme);
        res.status(HttpStatus.OK).json(response);
    }
}
