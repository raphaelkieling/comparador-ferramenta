import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { User } from 'src/modules/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async auth(email: string, pass: string): Promise<any> {
    const user: User = await this.userService.findOneByEmail(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
