import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dtos/new-user.dtos';
import { UserDetails } from 'src/user/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(user: NewUserDTO): Promise<UserDetails> {}
}
