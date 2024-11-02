import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PostsService } from '../providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePost } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';

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

    @ApiOperation({
        summary: 'Create a post',
        description: 'Create a new post for the user',
    })
    @ApiResponse({ 
        status: 201, 
        description: 'The post has been successfully created.' ,
    })
    @Post(':userId/posts')
    @HttpCode(201)
    public createPost(@Body() post: CreatePost, @Param('userId', ParseIntPipe) userId: number) {
        return this.postsService.createPost(userId, post);
    }

    @ApiOperation({
        summary: 'Update a post',
        description: 'Update a post for the user',
    })
    @ApiResponse({ 
        status: 200, 
        description: 'The post has been successfully updated.' ,
    })
    @Patch(':userId/posts/:postId')
    @HttpCode(200)
    public updatePost(@Body() patchPostDto: PatchPostDto, @Param('userId', ParseIntPipe) userId: number, @Param('postId', ParseIntPipe) postId: number) {
        return this.postsService.updatePost(userId, postId, patchPostDto);
        
    }
}
