import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return {
      code: 200,
      message: 'success',
      data: [
        {
          userId: 1,
          name: 'Grey',
          email: 'grey@gmail.com',
          gender: 'male',
        },
        {
          userId: 2,
          name: 'Dev',
          email: 'dev@gmail.com',
          gender: 'male',
        },
        {
          userId: 3,
          name: 'Dev.Grey',
          email: 'dev.grey@gmail.com',
          gender: 'male',
        },
      ],
    };
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
