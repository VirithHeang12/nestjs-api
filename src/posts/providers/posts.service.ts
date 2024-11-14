import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { MetaOptionsService } from 'src/meta-options/providers/meta-options.service';
import { TagsService } from 'src/tags/providers/tags.service';

@Injectable()
export class PostsService {

    constructor(
        private readonly usersService: UsersService,
        @InjectRepository(Post) private readonly postsRepository: Repository<Post>,
        private readonly metaOptionsService: MetaOptionsService,
        private readonly tagsService: TagsService,
    ) {}

    public async findAll(userId: number): Promise<Post[]> {
        const user = await this.usersService.getUser({ id: userId });

        if (!user) {
            throw new HttpException('User not found', 404);
        }

        return await this.postsRepository.find({
            where: {
                author: user,
            },
        });
    }

    public async createPost(userId: number, post: CreatePostDto): Promise<Post> {
        const user = await this.usersService.getUser({ id: userId });

        if (!user) {
            throw new HttpException('User not found', 404);
        }

        const tags = await this.tagsService.findByIds(post.tags);

        const postEntity = this.postsRepository.create({
            ...post,
            author: user,
            tags,
        });

        return await this.postsRepository.save(postEntity);      
    }

    public async updatePost(userId: number, postId: number, post: PatchPostDto): Promise<Post> {
        const user = await this.usersService.getUser({ id: userId });

        if (!user) {
            throw new HttpException('User not found', 404);
        }

        const postToUpdate = await this.postsRepository.findOne({ 
            where: { 
                id: postId,
                author: user,
            } 
        });

        if (!postToUpdate) {
            throw new HttpException('Post not found', 404);
        }

        postToUpdate.title = post.title ?? postToUpdate.title;
        postToUpdate.postType = post.postType ?? postToUpdate.postType;
        postToUpdate.slug = post.slug ?? postToUpdate.slug;
        postToUpdate.status = post.status ?? postToUpdate.status;
        postToUpdate.content = post.content ?? postToUpdate.content;
        postToUpdate.schema = post.schema ?? postToUpdate.schema;
        postToUpdate.publishOn = post.publishOn ?? postToUpdate.publishOn;
        postToUpdate.featuredImageUri = post.featuredImageUrl ?? postToUpdate.featuredImageUri;
        postToUpdate.tags = await this.tagsService.findByIds(post.tags);

        return await this.postsRepository.save(postToUpdate);
    }

    public async deletePost(userId: number, postId: number): Promise<number> {
        if (!this.usersService.getUser({ id: userId })) {
            throw new HttpException('User not found', 404);
        }
        const postToDelete = await this.postsRepository.findOne({ where: { id: postId } });

        if (!postToDelete) {
            throw new HttpException('Post not found', 404);
        }  
        await this.postsRepository.delete(postId);

        await this.metaOptionsService.delete(postToDelete.metaOption.id);

        return postToDelete.id
    }
}
