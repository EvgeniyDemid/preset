import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory  {
    constructor(private readonly configService: ConfigService){}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
         type: 'postgres',
         port: this.configService.get<number>('DATABASE_PORT'),
         username: this.configService.get('DB_USERNAME') ,
         password: this.configService.get('DB_PASSWORD'),
         database: this.configService.get('DB_DATABASE_NAME'),
         dropSchema: false,
         synchronize: false,
         entities: ["dist/**/*.entity{.ts,.js}"],
         migrationsRun:true,
         logging: true,
         migrations:["dist/**/migration/*{.js,.ts}"],
        // cli:{
        //     migrationsDir: 'src/modules/database/migration'
        // }
        } 
     }
}
