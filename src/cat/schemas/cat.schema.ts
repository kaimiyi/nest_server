import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat1 & Document;

@Schema()
export class Cat1 {//Schema装饰器下的类名决定集合名称，若类名是Cat ->cats,类名Cat1 ->cat1
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat1);