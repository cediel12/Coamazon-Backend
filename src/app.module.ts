import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DepartmentModule } from './modules/department/department.module';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';
import { ThemeModule } from './modules/theme/theme.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { OptionModule } from './modules/option/option.module';
import { SubthemeModule } from './modules/subtheme/subtheme.module';
import { AnswerModule } from './modules/answer/answer.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    CommonModule, 
    DepartmentModule, 
    QuestionnaireModule,  
    ThemeModule, 
    QuestionsModule,
    OptionModule,
    SubthemeModule,
    AnswerModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
