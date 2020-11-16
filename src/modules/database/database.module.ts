import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { DatabaseService } from './database.service';

@Module({
  imports:[ConfigModule,
          TypeOrmModule.forRootAsync({
          useClass: DatabaseService
    }),]
})
export class DatabaseModule {}

