import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseProvider } from 'src/common/database/database.provider';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [CommonModule]
})
export class UserModule {}
