import { ApiProperty } from '@nestjs/swagger';
import { Repo } from 'src/application/entities/repo';

export class GetReposSwagger {
  @ApiProperty({ isArray: true })
  repos: Repo;
}
