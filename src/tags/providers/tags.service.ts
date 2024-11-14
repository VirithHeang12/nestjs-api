import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';
import { DeleteResult, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>
    ) {}

    public async createTag(createTagDto: CreateTagDto): Promise<Tag> {
        const tag = this.tagRepository.create(createTagDto);

        return await this.tagRepository.save(tag);
    }

    public async findByIds(ids: number[]): Promise<Tag[]> {
        return await this.tagRepository.find({
            where: {
                id: In(ids),
            },
        })
    }

    public async deleteTag(id: number): Promise<DeleteResult> {
        return await this.tagRepository.delete(id);
    }
}
