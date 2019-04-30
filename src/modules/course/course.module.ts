import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  providers: [CourseService],
  controllers: [CourseController],
  imports: [CommonModule]
})
export class CourseModule {}
