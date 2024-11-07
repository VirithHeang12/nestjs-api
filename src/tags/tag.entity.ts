import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl, Matches } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tags')
export class Tag {
    @ApiProperty({
        description: 'Tag ID',
        example: 1,
        default: 1,
        required: true,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Tag Name',
        example: 'JavaScript',
        default: 'JavaScript',
        required: true,
    })
    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true,
    })
    name: string;

    @ApiProperty({
        description: 'Tag Slug',
        example: 'javascript',
        default: 'javascript',
        required: true,
    })
    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true,
    })
    slug: string;

    @ApiProperty({
        description: 'Tag Description',
        example: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        default: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        required: false,
    })
    @Column({
        type: 'text',
        nullable: true,
    })
    description?: string;

    @ApiProperty({
        description: 'Tag Schema',
        example: 'https://schema.org/SoftwareApplication',
        default: 'https://schema.org/SoftwareApplication',
        required: false,
    })
    @Column({
        type: 'text',
        nullable: true,
    })
    schema?: string;


    @ApiProperty({
        description: 'Tag Featured Image URL',
        example: 'https://example.com/image.jpg',
        default: 'https://example.com/image.jpg',
        required: false,
    })
    @Column({
        type: 'varchar',
        length: 1024,
        nullable: true,
    })
    featuredImageUrl?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}