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
            idquestion:idquestion,
            idoption:idoption
        }
        const response = await this.answerService.consultAnswer(anwer);
        res.status(HttpStatus.OK).json(response);
    }
}
