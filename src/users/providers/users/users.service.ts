import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/providers/auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { GetUsersParamDto } from 'src/users/dtos/get-users-param,dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly configService: ConfigService,
    ) {}

    /**
     * Create user
     * 
     * @param createUserDto 
     * 
     * @returns Promise<User>
     */
    public async getUser(getUsersParamDto: GetUsersParamDto): Promise<User> {
        if (!this.authService.isAuthenticated('token')) {
            throw new HttpException('Unauthorized', 401);
        }
        return this.userRepository.findOne({
            where: {
                id: getUsersParamDto.id,
            },
        });
    }

    /**
     * Get user by email and password
     * 
     * @param email 
     * @param password 
     * 
     * @returns Promise<number | undefined>
     */
    public async getUserIdByEmailAndPassword(email: string, password: string): Promise<number | undefined> {
        const user = await this.userRepository.findOne({
            where: {
                email,
                password,
            },
        });
        return user?.id;
    }

    /**
     * Get users
     * 
     * @param limit 
     * @param page 
     * 
     * @returns Promise<User[]>
     */
    public async getUsers(
        limit: number,
        page: number
    ): Promise<User[]> {
        return this.userRepository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    public async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        const newUser = this.userRepository.create(createUserDto);

        return this.userRepository.save(newUser);
    }
}
