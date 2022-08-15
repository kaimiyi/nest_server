import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [DbModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
