import { CommonModule } from 'src/common/common.module';
import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';

@Module({
  providers: [AnswerService],
  controllers: [AnswerController],
  imports: [CommonModule]
})
export class AnswerModule {}
