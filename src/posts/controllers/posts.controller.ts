import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostsService } from '../providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePost } from '../dtos/create-post.dto';

@ApiTags('Posts')
@Controller('users')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) {}

    @Get(':userId/posts')
    @HttpCode(200)
    public getAllPosts(@Param('userId', ParseIntPipe) userId: number) {
        return this.postsService.findAll(userId);
    }

    @Post(':userId/posts')
    @HttpCode(201)
    public createPost(@Body() post: CreatePost, @Param('userId', ParseIntPipe) userId: number) {
        return this.postsService.createPost(userId, post);
    }
}
