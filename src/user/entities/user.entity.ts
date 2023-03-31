import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError, Document } from 'mongoose';

export const UserDatabaseName = 'users';

@Schema({ collection: UserDatabaseName })
export class UserEntity extends Document {
  @Prop({
    required: true,
    index: true,
    trim: true,
    unique: true,
    type: String,
    maxlength: 100,
  })
  username: string;

  @Prop({
    required: true,
    index: true,
    unique: true,
    trim: true,
    lowercase: true,
    type: String,
    maxlength: 100,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

UserSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  this.email = this.email.toLowerCase();
  next();
});
