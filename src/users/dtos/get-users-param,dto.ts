import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamDto {
    @ApiPropertyOptional({
        default: 1,
        description: 'User id',
        example: 1
    })
    @IsOptional()
    @IsInt()
    id?: number;
}