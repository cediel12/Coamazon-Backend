import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Questionnaire, QuestionnaireUser } from './questionnaire.interface';

@Injectable()
export class QuestionnaireService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public getQuestions() {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM questionnaire", (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public getQuestion(idQuestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from questionnaire where idquestionnaire = ?", [idQuestion], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteQuestion(idQuestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM questionnaire WHERE idquestionnaire=?", [idQuestion], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public LoadqQestionnaire(idtheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT idquestion, question.description, pointstotal FROM questionaire INNER JOIN question on questionaire.idquestiona=questionaire_idquestiona where theme_idtheme=? ORDER BY RAND()", [idtheme], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public ConsutQuestionaireCreate(idtheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT idquestiona FROM `questionaire` WHERE theme_idtheme=?;", [idtheme], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public createQuestionaire(point: number, idtheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createquestionaire(?, ?)",
                [point, idtheme], (err, result) => {
                    return !err
                        ? resolve({ message: 'Questionaire creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public LoadOption(idquestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM `option` WHERE `option`.question_idquestion=?", [idquestion], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateQuestion(Question: Questionnaire) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE questionnaire SET name=?,scores_max=?,description=? WHERE idquestionnaire = ?",
                [Question.name,Question.scores_max,Question.description,Question.idquestionnaire], (err, result) => {
                    return !err
                        ? resolve(result)
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public createQuestion(Question: Questionnaire) {
        return new Promise((resolve, reject) => {
            this.connection.query("Coamazon.createquestionnaire(?, ?,?,?)",
                [Question.scores_max,Question.theme_idtheme,Question.name,Question.description], (err, result) => {
                    return !err
                        ? resolve({ message: 'Theme creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    
    public createQuestionUser(QuestionUser: QuestionnaireUser) {
        return new Promise((resolve, reject) => {
            this.connection.query("INSERT INTO questionnaire_has_course_user VALUES (?, ?, ?, 0);",
                [QuestionUser.idquestionnaire,QuestionUser.course,QuestionUser.user], (err, result) => {
                    return !err
                        ? resolve({ message: 'Theme creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
}
