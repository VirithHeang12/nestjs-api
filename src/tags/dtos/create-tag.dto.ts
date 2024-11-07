import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CreateTagDto {
    @ApiProperty({
        description: 'Tag Name',
        example: 'JavaScript',
        default: 'JavaScript',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(256)
    name: string;

    @ApiProperty({
        description: 'Tag Slug',
        example: 'javascript-1',
        default: 'javascript-1',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug must be kebab-case',
    })
    slug: string;

    @ApiPropertyOptional({
        description: 'Tag Description',
        example: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        default: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        required: false,
    })
    @IsOptional()
    @IsString()
    @MaxLength(1024)
    description?: string;

    @ApiPropertyOptional({
        description: 'Tag Schema',
        example: '{"@context":"https://schema.org/","@type":"SoftwareApplication"}',
        default: '{"@context":"https://schema.org/","@type":"SoftwareApplication"}',
        required: false,
    })
    @Column({
        type: 'text',
        nullable: true,
    })
    @IsJSON()
    @IsOptional()
    schema?: string;


    @ApiPropertyOptional({
        description: 'Tag Featured Image URL',
        example: 'https://example.com/image.jpg',
        default: 'https://example.com/image.jpg',
        required: false,
    })
    @IsUrl()
    @IsOptional()
    @MaxLength(1024)
    featuredImageUrl?: string;

}