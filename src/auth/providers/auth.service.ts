import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService,
    ) {}

    /**
     * Logs the user in.
     * 
     * @param email
     * @param password
     * 
     * @returns any
    */
    public async login(email: string, password: string): Promise<any> {
        const userId = await this.usersService.getUserIdByEmailAndPassword(email, password);

        if (!userId) {
            throw new HttpException('User not found.', 404);
        }

        const user = this.usersService.getUser({ id: userId });
    
        return user;
    }

    public isAuthenticated(token: string): boolean {
        if (!token) {
            return false;
        }
        return true;
    }
}
