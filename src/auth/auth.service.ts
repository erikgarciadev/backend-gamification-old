import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { UsersDocument } from 'src/users/schema/user.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UsersDocument>,
    private jwtService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password, username } = userObject;
    const findUser = await this.userModel.findOne({ username });
    if (findUser) {
      throw new HttpException(
        {
          message: 'El usuario ya existe',
          error: 'El usuario ya existe',
          errors: {
            username: 'El usuario ya existe',
          },
        },
        400,
      );
    }
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };
    return this.userModel.create(userObject);
  }

  async login(userObjectLogin: LoginAuthDto) {
    const { username, password } = userObjectLogin;
    const findUser = await this.userModel.findOne({ username });
    if (!findUser) {
      throw new HttpException(
        {
          message: 'El usuario y/o contraseña son incorrectas',
          error: 'El usuario y/o contraseña son incorrectas',
        },
        404,
      );
    }

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword)
      throw new HttpException(
        {
          message: 'El usuario y/o contraseña son incorrectas',
          error: 'El usuario y/o contraseña son incorrectas',
        },
        403,
      );

    const payload = { id: findUser._id, firstname: findUser.firstname || '' };
    const token = await this.jwtService.sign(payload);

    const user = {
      _id: findUser._id,
      image_url: findUser?.image_url,
      username: findUser.username,
      firstname: findUser.firstname || '',
    };

    const data = {
      user,
      token,
    };
    return data;
  }
}
