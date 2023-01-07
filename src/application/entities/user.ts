import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  login: string;
  @ApiProperty()
  avatar_url: string;
  @ApiProperty()
  url: string;
  @ApiProperty()
  html_url: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  company: string;
  @ApiProperty()
  blog: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  bio: string;
  @ApiProperty()
  twitter_username: string;
  @ApiProperty()
  public_repos: number;
  @ApiProperty()
  public_gists: number;
  @ApiProperty()
  followers: number;
  @ApiProperty()
  following: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}
