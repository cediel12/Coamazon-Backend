import { QuestionsService } from './questions.service';
import { Controller, HttpStatus, Request, Response, Body, Post, Get, Param, Delete, Put }  from '@nestjs/common';
import { Questions } from './questions.interface';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questServise: QuestionsService){}
    @Get('getAll')
    public async getquestions(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.questServise.getQuest();
        res.status(HttpStatus.OK).json(users);
    }


    @Get('findQuest/:idquestions')
    public async findQues(
        @Request() req,
        @Response() res,
        @Param('idquestions') idquestions
    ) {
        
        const user = await this.questServise.getQuests(idquestions);
        res.status(HttpStatus.OK).json(user);
    }

    @Post('createQuest')
    public async createQues(
        @Request() req,
        @Response() res,
        @Body('description') description,
        @Body('questionnaire_idquestionnaire') questionnaire_idquestionnaire
    ) {
        let Question: Questions = {
            description:description,
            questionnaire_idquestionnaire:questionnaire_idquestionnaire
        }
        const response = await this.questServise.createQuest(Question);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteQuest/:idquestions')
    public async deleteQues(
        @Request() req,
        @Response() res,
        @Param('idquestions') idquestions
    ) {
        
        const user = await this.questServise.deleteQuest(idquestions);
        res.status(HttpStatus.OK).json(user);
    }
    @Put('updateQuest')
    public async updateQues(
        @Request() req,
        @Response() res,
        @Body('idquestions') idquestions,
        @Body('description') description,
        @Body('questionnaire_idquestionnaire') questionnaire_idquestionnaire
    ) {
        let Question: Questions = {
            idquestions:idquestions,
            description:description,
            questionnaire_idquestionnaire:questionnaire_idquestionnaire
        }
        const response = await this.questServise.updateQuest(Question);
        res.status(HttpStatus.OK).json(response);
    }
}
