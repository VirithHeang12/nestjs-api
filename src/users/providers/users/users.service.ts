import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from 'src/users/dtos/get-users-param,dto';

@Injectable()
export class UsersService {
    private users = [
            {
                id: 1,
                name: 'John Doe',
                email: 'johndoe@gmail.com',
                password: '12345678'
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'janedoe@gmail.com',
                password: '12345678'
            }
        ];

    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
    ) {}

    public getUser(getUsersParamDto: GetUsersParamDto) {
        if (!this.authService.isAuthenticated('token')) {
            throw new HttpException('Unauthorized', 401);
        }
        return this.users.find(user => user.id === getUsersParamDto.id);
    }

    public getUserIdByEmailAndPassword(email: string, password: string): number {
        return this.users.find(user => user.email === email && user.password === password)?.id;
    }

    public getUsers(
        limit: number,
        page: number
    ) {
        console.log(limit, page);
        return this.users;
    }
}
