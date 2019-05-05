import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ThemeController],
  providers: [ThemeService],
  imports: [CommonModule]

})
export class ThemeModule {}
