import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GithubQuerySearch } from '../querys/github-query-search';
import { GetReposSwagger } from '../swagger/get-repos-swagger';
import { GetUserSwagger } from '../swagger/get-user-swagger';
import { NotFoundSwagger } from '../swagger/not-found-swagger';
import { GetRepoUseCase } from '../use-cases/get-repo-use-case';
import { GetRepoWithFilterUseCase } from '../use-cases/get-repo-with-filter-use-case';
import { GetUserUseCase } from '../use-cases/get-user-use-case';

@Controller('github')
@ApiTags('Github')
export class GithubController {
  constructor(
    private readonly getRepoUseCase: GetRepoUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly getRepoWithFilterUseCase: GetRepoWithFilterUseCase,
  ) {}

  @Get(':username')
  @ApiOperation({ summary: 'Returns github user information' })
  @ApiResponse({
    status: 200,
    description: 'user repos information',
    type: GetUserSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
    type: NotFoundSwagger,
  })
  async getUser(@Param('username') username: string) {
    const user = await this.getUserUseCase.execute({ username });
    return user;
  }

  @Get(':username/repos')
  @ApiOperation({ summary: 'Returns github user repos information' })
  @ApiResponse({
    status: 200,
    description: 'user repos information',
    type: GetReposSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'user not found',
    type: NotFoundSwagger,
  })
  async getRepos(
    @Param('username') username: string,
    @Query() query: GithubQuerySearch,
  ) {
    if (Object.keys(query).length > 0) {
      return this.getRepoWithFilterUseCase.execute({ username, filter: query });
    }
    return this.getRepoUseCase.execute({ username });
  }
}
