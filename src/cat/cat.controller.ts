import { Body, Controller, Post } from '@nestjs/common';
import { CatService } from './cat.service'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cat')
export class CatController {
    constructor( private catService: CatService){}
    @Post('inserts')
    creat( @Body() obj: CreateCatDto){
        return this.catService.create(obj)
    }

    @Post('get')
    gets( ) {
        return this.catService.findAll()
    }
}
