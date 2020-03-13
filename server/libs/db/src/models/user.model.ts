import { prop, modelOptions, DocumentType, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Course } from './course.model';

export type UserDocument = DocumentType<User>;

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'user1' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'pass1' })
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;

  @arrayProp({
    ref: 'Course'
  })
  liked: Ref<Course>
}