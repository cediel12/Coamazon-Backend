import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Questions } from './questions.interface';
@Injectable()
export class QuestionsService {
    constructor(
        @Inject('DbConnection') private connection
    ) { }
    public getQuest() {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM questions", (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public getQuests(idQuest: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from questions where idquestions = ?", [idQuest], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public FindQuestion(idQuest: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from questions where idquestions = ?", [idQuest], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public FindQuestionUltimate() {
        return new Promise((resolve, reject) => {
            this.connection.query("Select * from questionaire order by idquestiona desc limit 1", (err, result) => {
                return !err
                    ? resolve(result[0])
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public deleteQuest(idQuest: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("DELETE FROM questions WHERE idquestions=?", [idQuest], (err, result) => {
                return !err
                    ? resolve(result)
                    : reject(new BadRequestException(err.stack))
            })
        })
    }
    public updateQuest(Quest: Questions) {
        return new Promise((resolve, reject) => {
            this.connection.query("UPDATE questions SET description=? WHERE idquestions = ?",
                [Quest.description, Quest.idquestions], (err, result) => {
                    return !err
                        ? resolve(result)
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
    public createQuest(description : string, idquestionaire: number) {
        return new Promise((resolve, reject) => {
            this.connection.query("call Coamazon.createquestion(?, ?)",
                [description, idquestionaire], (err, result) => {
                    return !err
                        ? resolve({ message: 'Question creado Correctamente' })
                        : reject(new BadRequestException(err.stack))
                })
        })
    }
}
