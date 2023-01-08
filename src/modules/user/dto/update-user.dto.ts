import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ default: 'john' })
  username: string;
  @ApiProperty({ default: 's3cr3t' })
  password: string;
}
