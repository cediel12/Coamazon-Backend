import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DepartmentModule } from './modules/department/department.module';
import { CourseModule } from './modules/course/course.module';
import { ObjectModule } from './modules/object/object.module';

@Module({
  imports: [UserModule,CommonModule, DepartmentModule, CourseModule, ObjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
