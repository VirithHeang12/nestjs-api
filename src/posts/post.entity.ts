import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostTypes } from "./enums/post-types.enum";
import { PostStatuses } from "./enums/post-statuses.enum";
import { MetaOption } from "src/meta-options/meta-option.entity";

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

    @OneToOne(() => MetaOption, {
        nullable: true,
    })
    @JoinColumn()
    metaOption?: MetaOption;

    tags?: string[];
}
