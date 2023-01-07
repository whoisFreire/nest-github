import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { GetRepoUseCase } from './use-cases/get-repo-use-case';
import { GetUserUseCase } from './use-cases/get-user-use-case';

@Module({
  imports: [HttpModule],
  controllers: [GithubController],
  providers: [GithubService, GetRepoUseCase, GetUserUseCase],
})
export class GithubModule {}
