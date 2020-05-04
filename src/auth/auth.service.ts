import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import * as moment from 'moment';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './login.dto';
import { User } from '../interfaces/user.interface';

const comparePassword = (attempt, password) => bcrypt.compare(attempt, password)

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly jwtService: JwtService,
    ) { }

    async login(data: LoginDTO) {
        const { email, password } = data;

        const user = await this.userModel.findOne({ email });

        // console.log(await bcrypt.hash(password, 10), user.password)

        if (!user || !(await comparePassword(password, user.password))) {
            throw new HttpException(
                'Invalid username/password',
                HttpStatus.BAD_REQUEST,
            );
        }

        return {
            token: this.createToken(email),
            user: {
                name: user.name,
                email: user.email,
            },
            message: 'Login successful',
        };
    }

    createToken(email: string) {
        const accessToken = this.jwtService.sign({ email });
        const decodedToken: any = this.jwtService.decode(accessToken);

        return {
            expiresIn: (
                decodedToken && decodedToken.exp ?
                    `${moment(decodedToken.exp * 1000).diff(moment(), 'day') + 1} day` :
                    'no expire'
            ),
            accessToken,
        };
    }

    async validateUser(data: LoginDTO): Promise<any> {
        const { email } = data;

        return this.userModel.findOne({ email });
    }
}
