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
}
