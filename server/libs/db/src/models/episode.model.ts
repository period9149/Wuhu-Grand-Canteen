import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Course } from './course.model'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class Episode{

    @ApiProperty({ description: '课时名称', example: '请输入课时名称' })
    @prop()
    name: string

    @ApiProperty({ description: '视频', example: '请输入视频' })
    @prop()
    file: string

    @prop({ ref: 'Course' })
    course: Ref<Course>
}