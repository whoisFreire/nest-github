import { ApiProperty } from '@nestjs/swagger';
import { Repo } from '../../../application/entities/repo';

export class GetReposSwagger {
  @ApiProperty({ isArray: true })
  repos: Repo;
}
