import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'User email.',
    type: 'string',
  })
  readonly email?: string;
  @ApiProperty({
    description: 'User first name',
    type: 'string',
  })
  readonly name?: string;
  @ApiProperty({
    description: 'User last name',
    type: 'string',
  })
  readonly surname?: string;
}
