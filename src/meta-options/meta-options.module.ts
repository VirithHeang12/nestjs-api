import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsController } from './controllers/meta-options.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MetaOption])],
    controllers: [MetaOptionsController],
    providers: [],
    exports: [],
})
export class MetaOptionsModule {}
