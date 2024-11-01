import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(PostsController);
  }
}
