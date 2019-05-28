import { Injectable } from "@nestjs/common";
import { pbkdf2Sync, randomBytes } from "crypto";

@Injectable()
export class CryptoService{
    private getHash(password: string, salt){
        return pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
    }

    public hashPassword(password: string){
        const salt = randomBytes(32).toString('hex');
        const hash = this.getHash(password, salt);
        return [salt, hash].join('$');
    }

    public checkPassword(saltedPasswordHash, candidatePassword){
        const originalHash = saltedPasswordHash.split('$')[1];
        const salt = saltedPasswordHash.split('$')[0];
        const hash = this.getHash(candidatePassword, salt);
        return (hash === originalHash) ? true : false;
    }
}