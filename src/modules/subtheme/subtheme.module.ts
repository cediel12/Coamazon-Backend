import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { SubthemeService } from './subtheme.service';
import { SubthemeController } from './subtheme.controller';

@Module({
  providers: [SubthemeService],
  controllers: [SubthemeController],
  imports: [CommonModule]
})
export class SubthemeModule {}
