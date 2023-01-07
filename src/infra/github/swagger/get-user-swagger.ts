import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/application/entities/user';

export class GetUserSwagger {
  @ApiProperty()
  user: User;
}
