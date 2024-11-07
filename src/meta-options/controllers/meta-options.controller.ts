import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from '../providers/meta-options.service';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
import { MetaOption } from '../meta-option.entity';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        private readonly metaOptionsService: MetaOptionsService
    ) {}

    @Post()
    public async create(@Body() data: CreatePostMetaOptionsDto): Promise<MetaOption> {
        return this.metaOptionsService.create(data);
    }
}
