import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { User } from 'src/modules/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: User = await this.userService.findOneByEmail(email);
    const userValidPassword = bcrypt.compareSync(pass, user.password);

    if (userValidPassword) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { user, sub: user.userId };

    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
