import { Controller } from '@nestjs/common';
import { Course } from '@libs/db/models/course.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: Course,
    routes:{
        create: false,
        update: false,
        delete: false
    }
})
@Controller('courses')
@ApiTags('视频')
export class CoursesController {
    constructor(
        @InjectModel(Course) private model
    ){}
}

