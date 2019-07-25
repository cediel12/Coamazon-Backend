import { Answer, Question } from './answer.interface';
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
    @Get('loadcualification/:iduser')
    public async LoadCualification(
        @Request() req,
        @Response() res,
        @Param('iduser') iduser
    ) {
        const response = await this.answerService.LoadCualification(iduser);
        res.status(HttpStatus.OK).json(response);
    }
    @Post('ValidateREalitationQuestion')
    public async ValidateREalitationQuestion(
        @Request() req,
        @Response() res,
        @Body('iduser') iduser,
        @Body('idquestion') idquestion
    ) {
        const response = await this.answerService.ValidateREalitationQuestion(iduser,idquestion);
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

    @Post('savequest')
    public async SavePoints(
        @Request() req,
        @Response() res,
        @Body('idquestion') idquestion,
        @Body('iduser') iduser,
        @Body('points') points,
        @Body('qualification') qualification
    ) {
        let quest: Question = {
            idquestion: idquestion,
            iduser: iduser,
            points: points,
            qualification: qualification
        }
        console.log(quest);
        
        const response = await this.answerService.PointsQuestionaire(quest);
        res.status(HttpStatus.OK).json(response);
    }
    @Put('updatesavequest')
    public async UpdateSavePoints(
        @Request() req,
        @Response() res,
        @Body('idquestion') idquestion,
        @Body('iduser') iduser,
        @Body('points') points,
        @Body('qualification') qualification
    ) {
        let quest: Question = {
            idquestion: idquestion,
            iduser: iduser,
            points: points,
            qualification: qualification
        }
        console.log(quest);        
        const response = await this.answerService.UpdatePointsQuestionaire(quest);
        res.status(HttpStatus.OK).json(response);
    }

}
