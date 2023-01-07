import { ApiProperty } from '@nestjs/swagger';

export class NotFoundSwagger {
  @ApiProperty({ default: 404 })
  statusCode: number;
  @ApiProperty({ default: 'Invalid user' })
  message: string;
  @ApiProperty({ default: 'Not Found' })
  error: string;
}
