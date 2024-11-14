import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { MetaOptionsService } from 'src/meta-options/providers/meta-options.service';

@Injectable()
export class PostsService {

    constructor(
        private readonly usersService: UsersService,
        @InjectRepository(Post) private readonly postsRepository: Repository<Post>,
        private readonly metaOptionsService: MetaOptionsService
    ) {}

    public async findAll(userId: number): Promise<Post[]> {
        const user = await this.usersService.getUser({ id: userId });

        if (!user) {
            throw new HttpException('User not found', 404);
        }

        return this.postsRepository.find({
            where: {
                id: userId,
            },
        });
    }

    public async createPost(userId: number, post: CreatePostDto): Promise<Post> {
        const user = await this.usersService.getUser({ id: userId });

        if (!user) {
            throw new HttpException('User not found', 404);
        }

        const postEntity = this.postsRepository.create({
            ...post,
            author: user,
        });

        return await this.postsRepository.save(postEntity);      
    }

    public async updatePost(userId: number, postId: number, post: PatchPostDto): Promise<Post> {
        if (!this.usersService.getUser({ id: userId })) {
            throw new HttpException('User not found', 404);
        }
        const postToUpdate = await this.postsRepository.findOne({ where: { id: postId } });

        if (!postToUpdate) {
            throw new HttpException('Post not found', 404);
        }
        return this.postsRepository.save({ ...postToUpdate, ...post }); 
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
