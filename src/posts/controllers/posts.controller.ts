import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PostsService } from '../providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';


@ApiTags('Posts')
@Controller('users')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) {}

    @Get(':userId/posts')
    @HttpCode(200)
    public async getAllPosts(@Param('userId', ParseIntPipe) userId: number): Promise<any> {
        return await this.postsService.findAll(userId);
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
    public async createPost(@Body() post: CreatePostDto, @Param('userId', ParseIntPipe) userId: number): Promise<any> {
        return await this.postsService.createPost(userId, post);
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

    @ApiOperation({
        summary: 'Delete a post',
        description: 'Delete a post for the user',
    })
    @ApiResponse({
        status: 200,
        description: 'The post has been successfully deleted.',
    })
    @Delete(':userId/posts/:postId')
    @HttpCode(200)
    public async deletePost(@Param('userId', ParseIntPipe) userId: number, @Param('postId', ParseIntPipe) postId: number) {
        const id = await this.postsService.deletePost(userId, postId);
        return {
            message: `Post with id ${id} has been successfully deleted`,
            status: HttpStatus.OK,
        }
    }
}
