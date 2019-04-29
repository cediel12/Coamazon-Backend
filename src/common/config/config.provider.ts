import * as dotenv from 'dotenv';
dotenv.config()

export const ConfigProvider ={
    provide:'config',
    useFactory:()=>{
        const Config={
            db:{
                user: process.env.USERDB,
                password: process.env.PASSWORD,
                host: process.env.HOST,
                port: Number(process.env.PORT),
                database: process.env.DATABASE
            }
        }
        return Config;
    }
};
