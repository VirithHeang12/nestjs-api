import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from '../providers/posts.service';

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
}
