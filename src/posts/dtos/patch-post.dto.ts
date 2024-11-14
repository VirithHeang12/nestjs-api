import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";
import { IsInt, IsNotEmpty } from "class-validator";

export class PatchPostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: 'Post ID',
        example: 1,
        default: 1,
        required: true,
    })
    @IsNotEmpty()
    @IsInt()
    id: number;
}