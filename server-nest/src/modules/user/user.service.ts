import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  private generatePassword(plainPassword) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainPassword, salt);
  }

  create(user: User): Promise<User> {
    user.password = this.generatePassword(user.password);
    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<boolean> {
    if (user.password) {
      user.password = this.generatePassword(user.password);
    }

    const result = await this.userRepository.update(id, user);
    return result.raw.changedRows >= 1;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected >= 1;
  }
}
