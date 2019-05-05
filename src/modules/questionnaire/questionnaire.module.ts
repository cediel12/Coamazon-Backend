import { CommonModule } from 'src/common/common.module';
import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';

@Module({
  providers: [QuestionnaireService],
  controllers: [QuestionnaireController],
  imports: [CommonModule]
})
export class QuestionnaireModule {}
