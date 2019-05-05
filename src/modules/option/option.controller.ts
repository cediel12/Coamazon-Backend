import { OptionService } from './option.service';
import { Controller, HttpStatus, Request, Response, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { Option } from './option.interface';

@Controller('option')
export class OptionController {
    constructor(private readonly OptionService: OptionService){}
    @Get('getAll')
    public async getOption(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.OptionService.getoption();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findOption/:idOption')
    public async findOption(
        @Request() req,
        @Response() res,
        @Param('idoption') idoption
    ) {
        
        const user = await this.OptionService.getOption(idoption);
        res.status(HttpStatus.OK).json(user);
    }

    @Post('createOption')
    public async createOption(
        @Request() req,
        @Response() res,
        @Body('option') option,
        @Body('veracity') veracity,
        @Body('questions_idquestions') questions_idquestions
    ) {
        let Option: Option = {
            option:option,
            veracity:veracity,
            questions_idquestions:questions_idquestions
        }
        console.log(Option)
        const response = await this.OptionService.createOption(Option);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteOption/:idoption')
    public async deleteOption(
        @Request() req,
        @Response() res,
        @Param('idoption') idoption
    ) {
        
        const user = await this.OptionService.deleteOption(idoption);
        res.status(HttpStatus.OK).json(user);
    }
    @Put('updateOption')
    public async updateOption(
        @Request() req,
        @Response() res,
        @Body('idoption') idoption,
        @Body('option') option,
        @Body('veracity') veracity
    ) {
        let Option: Option = {
            idoption:idoption,
            option:option,
            veracity:veracity
        }
        console.log(Option)
        const response = await this.OptionService.updateOption(Option);
        res.status(HttpStatus.OK).json(response);
    }

}
