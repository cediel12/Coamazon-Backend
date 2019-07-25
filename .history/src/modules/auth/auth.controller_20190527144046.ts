import { AuthService} from './auth.service';
import { Controller, Req, Post, Body, HttpCode,HttpStatus  } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('signup')
    public async signUp(@Body() user): Promise<any> {
        return await this.authService.signUp(user)
    }


    @Post('signin')
   // @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    public async signIn(
        @Req() req,
        @Body('username') username,
        @Body('password') password
    ) {
        return await this.authService.signIn(username, password)
    }
}
