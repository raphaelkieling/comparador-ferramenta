import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../core/domain/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({ select: ['id', 'email', 'isAdmin'] });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id, {
      select: ['id', 'email', 'isAdmin'],
    });
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

  async create(user: User): Promise<User> {
    user.password = this.generatePassword(user.password);
    const { password, ...result } = await this.userRepository.save(user);
    return result;
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
