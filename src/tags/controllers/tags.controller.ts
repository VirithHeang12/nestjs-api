import { Body, Controller, Post } from '@nestjs/common';
import { TagsService } from '../providers/tags.service';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';

@Controller('tags')
export class TagsController {
    constructor(
        private readonly tagsService: TagsService
    ) {}

    @Post()
    public async createTag(@Body() createTagDto: CreateTagDto): Promise<Tag> {
        return await this.tagsService.createTag(createTagDto);
    }
}
