import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../application/entities/user';

export class GetUserSwagger {
  @ApiProperty()
  user: User;
}
