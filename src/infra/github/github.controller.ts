import { Controller, Get, Param } from '@nestjs/common';
import { GetRepoUseCase } from './use-cases/get-repo-use-case';
import { GetUserUseCase } from './use-cases/get-user-use-case';

@Controller('github')
export class GithubController {
  constructor(
    private readonly getRepoUseCase: GetRepoUseCase,
    private readonly getUserUseCase: GetUserUseCase,
  ) {}

  @Get(':username')
  async getUser(@Param('username') username: string) {
    const user = await this.getUserUseCase.execute({ username });
    return user;
  }

  @Get(':username/repos')
  async getRepos(@Param('username') username: string) {
    return this.getRepoUseCase.execute({ username });
  }
}
