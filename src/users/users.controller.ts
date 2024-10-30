import { Body, Controller, DefaultValuePipe, Get, Headers, HttpStatus, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param,dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {

    }

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
        console.log(createUserDto, headers, ip);
    }

    @Patch('/:id')
    public patchUser(
        @Param(ParseIntPipe) id: number,
        @Body() pathUserDto: PatchUserDto
    ) {

    }
}
