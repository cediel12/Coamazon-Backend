import { Answer } from './answer.interface';
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
                "SELECT idoption, `option` FROM `option` WHERE `option`.question_idquestion=?",
                 [idtheme], (err, result) => {
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
            this.connection.query("SELECT veracirty FROM `option` WHERE `option`.idoption=?", [idoption], (err, result) => {
                return !err
                    ? resolve(result[0])
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
}
