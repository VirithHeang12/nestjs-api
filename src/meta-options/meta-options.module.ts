import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsController } from './controllers/meta-options.controller';
import { MetaOptionsService } from './providers/meta-options.service';

@Module({
    imports: [TypeOrmModule.forFeature([MetaOption])],
    controllers: [MetaOptionsController],
    providers: [MetaOptionsService],
    exports: [],
})
export class MetaOptionsModule {}
