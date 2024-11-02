import { HttpException, Injectable } from '@nestjs/common';
import { Post } from '../interfaces/posts.interface';
import { UsersService } from 'src/users/providers/users/users.service';
import { CreatePost } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {

    private readonly posts: Post[] = [
        {
            userId: 1,
            id: 1,
            title: 'Post 1',
            body: 'Post 1 body'
        },
        {
            userId: 1,
            id: 2,
            title: 'Post 2',
            body: 'Post 2 body'
        },
        {
            userId: 2,
            id: 3,
            title: 'Post 3',
            body: 'Post 3 body'
        },
        {
            userId: 2,
            id: 4,
            title: 'Post 4',
            body: 'Post 4 body'
        }
    ];


    constructor(
        private readonly usersService: UsersService,
    ) {}

    public findAll(userId: number): Post[] {
        if (!this.usersService.getUser({ id: userId })) {
            throw new HttpException('User not found', 404);
        }
        return this.posts.filter(post => post.userId === userId);
    }

    public createPost(userId: number, post: CreatePost): CreatePost {
        if (!this.usersService.getUser({ id: userId })) {
            throw new HttpException('User not found', 404);
        }
        return post;
    }

    public updatePost(userId: number, postId: number, post: PatchPostDto): Post {
        if (!this.usersService.getUser({ id: userId })) {
            throw new HttpException('User not found', 404);
        }
        const postIndex = this.posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
            throw new HttpException('Post not found', 404);
        }
        return {
            ...this.posts[postIndex],
            ...post,
        };
    }
}
