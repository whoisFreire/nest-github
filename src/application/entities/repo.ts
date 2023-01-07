import { ApiProperty } from '@nestjs/swagger';
import { User } from './user';

export class Repo {
  @ApiProperty()
  name: string;
  @ApiProperty()
  full_name: string;
  @ApiProperty()
  private: boolean;
  @ApiProperty()
  owner: User;
  @ApiProperty()
  html_url: string;
  @ApiProperty()
  description?: any;
  @ApiProperty()
  fork: boolean;
  @ApiProperty()
  url: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  pushed_at: Date;
  @ApiProperty()
  language: string;
  @ApiProperty()
  watchers: number;
  @ApiProperty()
  default_branch: string;
}
