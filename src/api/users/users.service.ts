import { Injectable, Inject } from '@nestjs/common';

import { USERS_REPOSITORY } from 'src/configuration';
import { UpdateUserDto } from './dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, body: UpdateUserDto) {
    return this.usersRepository.update({ ...body }, { where: { id } });
  }

  delete(id: number) {
    return this.usersRepository.destroy({ where: { id } });
  }
}
