import { IsArray, IsEnum, IsInt, IsISO8601, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { PostTypes } from "../enums/post-types.enum";
import { PostStatuses } from "../enums/post-statuses.enum";
import { CreatePostMetaOptionsDto } from "../../meta-options/dtos/create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        description: 'User ID',
        example: 1,
        default: 1,
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({
        description: 'Post Title',
        example: 'Hello World',
        default: 'Hello World',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(512)
    title: string;

    @ApiProperty({
        description: `Possible values for Post Types: ${Object.values(PostTypes).join(', ')}`,
        example: PostTypes.POST,
        default: PostTypes.POST,
        required: true,
        enum: PostTypes,
        enumName: 'PostTypes',
    })
    @IsNotEmpty()
    @IsEnum(PostTypes)
    postType: PostTypes;

    @ApiProperty({
        description: 'Post Slug',
        example: 'hello-world',
        default: 'hello-world',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'Slug must be a valid URL slug',
    })
    slug: string;

    @ApiProperty({
        description: `Possible values for Post Statuses: ${Object.values(PostStatuses).join(', ')}`,
        example: PostStatuses.PUBLISHED,
        default: PostStatuses.PUBLISHED,
        required: true,
        enum: PostStatuses,
        enumName: 'PostStatuses',
    })
    @IsNotEmpty()
    @IsEnum(PostStatuses)
    status: PostStatuses;

    @ApiPropertyOptional({
        description: 'Post Content',
        example: 'Hello World',
        default: 'Hello World',
        required: false,
    })
    @IsString()
    @IsOptional()
    content?: string;

    @ApiPropertyOptional({
        description: 'Post Excerpt',
        example: 'Hello World',
        default: 'Hello World',
        required: false,
        format: 'json',
    })
    @IsOptional()
    @IsJSON()
    schema?: string;

    @ApiPropertyOptional({
        description: 'Featured Image URL',
        example: 'https://example.com/image.jpg',
        default: 'https://example.com/image.jpg',
        required: false,
    })
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImageUrl?: string;

    @ApiPropertyOptional({
        description: 'Publish On Date',
        example: '2022-01-01T00:00:00Z',
        default: '2022-01-01T00:00:00Z',
        required: false,
    })
    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @ApiPropertyOptional({
        description: 'Tags',
        example: ['tag1', 'tag2'],
        default: ['tag1', 'tag2'],
        required: false,
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];

    @ApiPropertyOptional({
        description: 'Meta Options',
        type: CreatePostMetaOptionsDto,
        required: false,
        items: {
            type: 'object',
            properties: {
                metaValue: {
                    type: 'string',
                    example: '{"key": "value"}',
                    default: '{"key": "value"}',
                },
            },
        }
    })
    @IsOptional()
    @Type(() => CreatePostMetaOptionsDto)
    metaOption?: CreatePostMetaOptionsDto;
}
