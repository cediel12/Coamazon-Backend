import { Questionnaire, QuestionnaireUser } from './questionnaire.interface';
import { QuestionnaireService } from './questionnaire.service';
import { Controller, HttpStatus, Request, Response, Body, Post, Get, Param, Delete, Put }  from '@nestjs/common';

@Controller('questionnaire')
export class QuestionnaireController {
    constructor(private readonly questionnaireService: QuestionnaireService){}
    @Get('getAll')
    public async getquestions(
        @Request() req,
        @Response() res
    ) {
        
        const users = await this.questionnaireService.getQuestions();
        res.status(HttpStatus.OK).json(users);
    }
    


    @Get('findQuestion/:idquestions')
    public async findQuestion(
        @Request() req,
        @Response() res,
        @Param('idquestions') idquestions
    ) {
        
        const user = await this.questionnaireService.getQuestion(idquestions);
        res.status(HttpStatus.OK).json(user);
    }

    @Get('LoadQuestionnaire/:idquestions')
    public async LoadQuestionnaire(
        @Request() req,
        @Response() res,
        @Param('idquestions') idquestions
    ) {
        
        const user = await this.questionnaireService.LoadqQestionnaire(idquestions);
        res.status(HttpStatus.OK).json(user);
    }

    @Get('ConsutQuestionaireCreate/:idquestions')
    public async ConsutQuestionaireCreate(
        @Request() req,
        @Response() res,
        @Param('idquestions') idquestions
    ) {
        
        const user = await this.questionnaireService.ConsutQuestionaireCreate(idquestions);
        res.status(HttpStatus.OK).json(user[0]);
    }
    @Post('createQuestion')
    public async createQuestionaire(
        @Request() req,
        @Response() res,
        @Body('scores_max') scores_max,
        @Body('idtheme') idtheme,
    ) {        
        const response = await this.questionnaireService.createQuestionaire(scores_max, idtheme);
        res.status(HttpStatus.OK).json(response);
    }
    @Post('createQuestionaire')
    public async createQuestion(
        @Request() req,
        @Response() res,
        @Body('scores_max') scores_max,
        @Body('name') name,
        @Body('description') description,
        @Body('theme_idtheme') theme_idtheme
    ) {
        let Question: Questionnaire = {
            scores_max:scores_max,
            name:name,
            description:description,
            theme_idtheme:theme_idtheme
        }
        const response = await this.questionnaireService.createQuestion(Question);
        res.status(HttpStatus.OK).json(response);
    }
    @Delete('deleteQuestion/:idquestion')
    public async deleteQuestion(
        @Request() req,
        @Response() res,
        @Param('idquestion') idquestion
    ) {
        
        const user = await this.questionnaireService.deleteQuestion(idquestion);
        res.status(HttpStatus.OK).json(user);
    }
    @Put('updateQuestion')
    public async updateQuestion(
        @Request() req,
        @Response() res,
        @Body('scores_max') scores_max,
        @Body('name') name,
        @Body('description') description,
        @Body('theme_idtheme') theme_idtheme
    ) {
        let Question: Questionnaire = {
            scores_max:scores_max,
            name:name,
            description:description,
            theme_idtheme:theme_idtheme
        }
        const response = await this.questionnaireService.updateQuestion(Question);
        res.status(HttpStatus.OK).json(response);
    }

    //crear la relacion entre usuario y el questionario y los puntos de cada questionario individual
    @Post('createQuestionUser')
    public async createQuestionUser(
        @Request() req,
        @Response() res,
        @Body('idquestionnaire') idquestionnaire,
        @Body('course') course,
        @Body('user') user,
    ) {
        let QuestionUser: QuestionnaireUser = {
            idquestionnaire:idquestionnaire,
            course:course,
            user:user
        }
        const response = await this.questionnaireService.createQuestionUser(QuestionUser);
        res.status(HttpStatus.OK).json(response);
    }
}
