import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';


@Module({
  providers: [QuestionsService],
  controllers: [QuestionsController],
  imports: [CommonModule]

})
export class QuestionsModule {}
