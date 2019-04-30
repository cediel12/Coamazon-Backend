import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  providers: [DepartmentService],
  controllers: [DepartmentController],
  imports: [CommonModule]
})
export class DepartmentModule {}
