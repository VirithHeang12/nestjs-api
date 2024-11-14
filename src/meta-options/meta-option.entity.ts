import { ApiProperty } from "@nestjs/swagger";
import { Post } from "src/posts/post.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('meta_options')
export class MetaOption {
    @ApiProperty({
        description: 'Meta Option ID',
        example: 1,
        default: 1,
        required: true,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Meta Option Key',
        example: 'site_title',
        default: 'site_title',
        required: true,
    })
    @Column({
        type: 'json',
        nullable: false,
    })
    metaValue: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToOne(() => Post, post => post.metaOption, {
        onDelete: 'CASCADE',
        nullable: false,
    })
    @JoinColumn()
    post: Post;
}