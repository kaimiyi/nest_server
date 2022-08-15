import { Module } from '@nestjs/common';
// import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/test',{
    useNewUrlParser: true
  })],
  providers: [DbService],
  exports: [DbService]
})
export class DbModule {}
