import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule, MetaOptionsModule, TagsModule, TypeOrmModule.forFeature([Post])],
})
export class PostsModule {}
