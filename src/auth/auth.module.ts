import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas';

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '14d' },
    }),
    MongooseModule.forRoot('mongodb+srv://admin:kmJMw73pt0Eh2JNn@cluster0-mkxqb.mongodb.net/what_where_when_k44'),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
    ]),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtStrategy],
})
export class AuthModule { }
