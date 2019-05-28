import { JwtStrategy } from './strategies/jwt.strategy';
import { CryptoService } from './crypto.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrKeyProvider: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, CryptoService,JwtStrategy]
})
export class AuthModule {}
