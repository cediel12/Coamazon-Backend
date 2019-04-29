import { Injectable } from '@nestjs/common';
import {IConnection, createPool, IConnectionConfig} from 'mysql';
import { async } from 'rxjs/internal/scheduler/async';

export const DatabaseProvider={
    provide: 'DbConnection',
    useFactory: async(config):Promise<IConnection> =>{
        console.log(config);
        return await createPool(config.db as IConnectionConfig);
    },
    inject:['config']
}