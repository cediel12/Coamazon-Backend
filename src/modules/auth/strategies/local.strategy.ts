import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-strategy";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'username',
            passReqToCallback: false
        })
    }

    async validate(username, password, done: Function){
       const user = await this.authService.signIn(username, password);
       if (!user) {
           return done(new UnauthorizedException(), false);
       }
       done(null, user);
    }
}