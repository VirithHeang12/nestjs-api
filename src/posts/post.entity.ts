import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostTypes } from "./enums/post-types.enum";
import { PostStatuses } from "./enums/post-statuses.enum";
import { MetaOption } from "src/meta-options/meta-option.entity";
import { User } from "src/users/user.entity";
import { Tag } from "src/tags/tag.entity";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 512,
    })
    title: string;

    @Column({
        type: 'enum',
        enum: PostTypes,
        nullable: false,
        default: PostTypes.POST,
    }
    )
    postType: PostTypes;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true,
    })
    slug: string;

    @Column({
        type: 'enum',
        enum: PostStatuses,
        nullable: false,
        default: PostStatuses.DRAFT,
    })
    status: PostStatuses;

    @Column({
        type: 'text',
        nullable: true,
    })
    content?: string;

    @Column({
        type: 'json',
        nullable: true,
    })
    schema?: string;

    @Column({
        type: 'varchar',
        length: 1024,
        nullable: true,
    })
    featuredImageUri?: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    publishOn?: Date;

    @OneToOne(() => MetaOption, (metaOption) => metaOption.post, {
        cascade: true,
        nullable: true,
        eager: true,
    })
    metaOption?: MetaOption;

    @ManyToOne(() => User, (user) => user.posts, {
        eager: true,
    })
    author: User;

    @ManyToMany(() => Tag, {
        eager: true,
    })
    @JoinTable()
    tags?: Tag[];
}
