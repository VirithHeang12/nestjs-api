import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from '../providers/auth.service';

/**
 * AuthController is a class that contains the endpoints for the authentication.
 * 
 * @class AuthController
 */
@Controller('auth')
export class AuthController {
    /**
     * Injects the AuthService into the AuthController.
     * 
     * @param authService 
     * 
     * @returns void
     */
    constructor(
        private readonly authService: AuthService,
    ) {}

    /**
     * Logs the user in.
     * 
     * @param email
     * @param password
     * 
     * @returns boolean
     */
    @Post('login')
    @HttpCode(200)
    public login(@Body('email') email: string, @Body('password') password: string): any {
        if (!email || !password) {
            return 'Email and password are required.';
        }

        const user = this.authService.login(email, password);
        if (!user) {
            return 'User not found.';
        }

        return user;
    }
}
