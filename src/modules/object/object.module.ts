import { Module } from '@nestjs/common';
import { ObjectController } from './object.controller';
import { ObjectService } from './object.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ObjectController],
  providers: [ObjectService],
  imports: [CommonModule]

})
export class ObjectModule {}
