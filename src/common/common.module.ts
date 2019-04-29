import { ConfigProvider } from './config/config.provider';
import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database/database.provider';


@Module({
    providers: [DatabaseProvider,ConfigProvider],
    exports: [DatabaseProvider,ConfigProvider]
  })
  export class CommonModule {}