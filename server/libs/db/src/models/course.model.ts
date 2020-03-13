import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions:{
        timestamps: true,
        toJSON: { virtuals: true }
    }
})
export class Course{

    @ApiProperty({ description: '课程名', example: '请输入课程名' })
    @prop()
    name: string

    @ApiProperty({ description: '封面图', example: '请输入封面图' })
    @prop()
    cover: string

    @arrayProp({
        ref: 'Episode',
        localField: '_id',
        foreignField: 'course'
    })
    episodes: Ref<Episode>
}