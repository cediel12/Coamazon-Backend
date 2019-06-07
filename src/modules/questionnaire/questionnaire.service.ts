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
    public LoadqQestionnaire(idQuestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM Coamazon.`option` inner join Coamazon.question on question.idquestion=`option`.question_idquestion inner join Coamazon.questionaire on questionaire.idquestiona=question.questionaire_idquestiona where questionaire.idquestiona=?", [idQuestion], (err, result) => {
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
