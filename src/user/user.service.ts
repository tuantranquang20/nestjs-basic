import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity.name) private readonly userModel: Model<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = new this.userModel({ ...createUserDto });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async checkIfExist(field = 'id', value = '') {
    try {
      const isExist = await this.userModel.findOne({
        [field]: value,
      });
      return isExist;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
