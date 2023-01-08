import { ApiProperty } from '@nestjs/swagger';

export class GithubQuerySearch {
  @ApiProperty({
    name: 'type',
    required: false,
  })
  type: string;

  @ApiProperty({
    name: 'sort',
    required: false,
  })
  sort: string;

  @ApiProperty({
    name: 'direction',
    required: false,
  })
  direction: string;

  @ApiProperty({
    name: 'per_page',
    required: false,
  })
  perPage: number;

  @ApiProperty({
    name: 'page',
    required: false,
  })
  page: number;
}
