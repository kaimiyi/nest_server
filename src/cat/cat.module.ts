import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat1 , CatSchema } from './schemas/cat.schema';

@Module({
  // 注册模式 Schema====建集合（model）需要依赖与模式（schema）-> cat.service
  imports: [ MongooseModule.forFeature([{ name: Cat1.name, schema: CatSchema }]) ],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}
