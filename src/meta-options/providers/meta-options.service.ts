import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
    constructor(
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>
    ) {}

    public async create(data: CreatePostMetaOptionsDto): Promise<MetaOption> {
        const metaOption = this.metaOptionRepository.create(data);
        return await this.metaOptionRepository.save(metaOption);
    }

    public async delete(id: number): Promise<void> {
        await this.metaOptionRepository.delete(id);
    }
}
