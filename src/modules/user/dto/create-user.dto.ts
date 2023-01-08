import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'john' })
  username: string;
  @ApiProperty({ default: 'secret' })
  password: string;
}
