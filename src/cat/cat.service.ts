import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat1, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatService {
    // 
    constructor(@InjectModel(Cat1.name) private catModel: Model<CatDocument>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat1> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
      }

    async findAll(): Promise<Cat1[]> {
        return this.catModel.find().exec();
      }
}
