import { Answer,Question } from './answer.interface';
import { Injectable, BadRequestException, Inject } from '@nestjs/common';

@Injectable()
export class AnswerService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public consultAnswer(answer: Answer) {
        return new Promise((resolve, reject) => {
            this.connection.query
            ("SELECT * FROM Coamazon.option where idoption=? ;",
             [answer.idoption],(err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public LoadOption(idtheme: number) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT idoption, `option` FROM `option` WHERE `option`.question_idquestion=? ORDER BY RAND()",
                 [idtheme], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public LoadCualification(iduser: number) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT theme.`name`, qualification, pointsobtenidos from questiona_has_user INNER JOIN questionaire on questiona_has_user.questionaire_idquestiona=questionaire.idquestiona INNER JOIN theme on theme.idtheme=questionaire.idquestiona where user_iduser_studens=? ORDER BY `name`,qualification desc",
                 [iduser], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public LoadOptionsCorects(idquestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select question.description, `option`.`option` FROM questionaire INNER JOIN question on question.questionaire_idquestiona=questionaire.idquestiona INNER JOIN `option` on `option`.question_idquestion=question.idquestion where `option`.veracirty=true and questionaire.idquestiona=?", [idquestion], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }

    public ValidateOption(idoption: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT veracirty,points FROM `option`  INNER JOIN question on idquestion=question_idquestion WHERE `option`.idoption=?", [idoption], (err, result) => {
                return !err
                    ? resolve(result[0])
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public PointsQuestionaire(savequest: Question) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.registrarcalificacion(?,?,?,?);",
             [savequest.iduser, savequest.idquestion, savequest.points, savequest.qualification], (err, result) => {
                return !err
                    ? resolve({message: 'Respuestas Confirmadas'})
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public UpdatePointsQuestionaire(savequest: Question) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE questiona_has_user SET pointsobtenidos=? , qualification=? WHERE user_iduser_studens=? and questionaire_idquestiona=?;",
             [savequest.points,savequest.qualification, savequest.iduser, savequest.idquestion], (err, result) => {
                return !err
                    ? resolve({message: 'Respuestas Confirmadas'})
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public ValidateREalitationQuestion(iduser: number, idquestion: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM questiona_has_user where user_iduser_studens=? and questionaire_idquestiona=?;", [iduser,idquestion], (err, result) => {
                return !err
                    ? resolve(result[0])
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
