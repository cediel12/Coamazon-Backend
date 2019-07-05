import { Answer } from './answer.interface';
import { AnswerService } from './answer.service';
import { Controller, Get, HttpStatus, Request, Response, Param, Put, Body, Delete, Post } from '@nestjs/common';


@Controller('answer')
export class AnswerController {
    constructor(private readonly answerService: AnswerService) { }
    @Post('consultAnswer')
    public async consultAnswer(
        @Request() req,
        @Response() res,
        @Body('idquestion') idquestion,
        @Body('idoption') idoption
    ) {
        let anwer: Answer = {
            idquestion: idquestion,
            idoption: idoption
        }
        const response = await this.answerService.consultAnswer(anwer);
        res.status(HttpStatus.OK).json(response);
    }

    @Get('loadoption/:idquestion')
    public async LoadOption(
        @Request() req,
        @Response() res,
        @Param('idquestion') idquestion
    ) {
        const response = await this.answerService.LoadOption(idquestion);
        res.status(HttpStatus.OK).json(response);
    }
    @Get('ValidateOption/:idoption')
    public async ValidateOption(
        @Request() req,
        @Response() res,
        @Param('idoption') idoption
    ) {
        const response = await this.answerService.ValidateOption(idoption);
        res.status(HttpStatus.OK).json(response);
    }
    @Get('loadcorectoptions/:idquestion')
    public async loadcorectoptions(
        @Request() req,
        @Response() res,
        @Param('idquestion') idquestion
    ) {
        const response = await this.answerService.LoadOptionsCorects(idquestion);
        res.status(HttpStatus.OK).json(response);
    }
}
