import { Body, Controller, DefaultValuePipe, Get, Headers, HttpStatus, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param,dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users/users.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {

    }

    @ApiOperation({
        summary: 'Get all users',
        description: 'Get all users from the database',
        responses: {
            [HttpStatus.OK]: {
                description: 'The users were successfully retrieved',
                links: {
                    'next': {
                        description: 'The next page of users',
                    }
                }
            },
            [HttpStatus.INTERNAL_SERVER_ERROR]: {
                description: 'An error occurred while trying to retrieve the users'
            }
        }     
    })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        default: 10,
        description: 'Limit of users per page'
    })
    @ApiQuery({
        name: 'page',
        required: false,
        type: Number,
        default: 1,
        description: 'Page number'
    })
    @Get()
    public getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ) {
        return this.usersService.getUsers(limit, page);
    }

    @Get('/:id?')
    public getUser(
        @Param() getUsersParamDto: GetUsersParamDto
    ) {
        return this.usersService.getUser(getUsersParamDto);
    }

    @Post()
    public createUser(
        @Body() createUserDto: CreateUserDto,
        @Headers() headers: any,
        @Ip() ip: string
    ) {
        return this.usersService.createUser(createUserDto);
    }

    @Patch('/:id')
    public patchUser(
        @Param(ParseIntPipe) id: number,
        @Body() pathUserDto: PatchUserDto
    ) {

    }
}
