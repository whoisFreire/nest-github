import { Injectable } from '@nestjs/common';
import { Repo } from '../../../application/entities/repo';
import { RepoInfoViewModel } from '../viewModels/repo-info-view-model';
import { UserInfoViewModel } from '../viewModels/user-info-view-model';
import { GithubServiceInterface } from '../interfaces/githubService.interface';

interface GetRepoRequest {
  username: string;
}

@Injectable()
export class GetRepoUseCase {
  constructor(private readonly githubService: GithubServiceInterface) {}

  async execute(request: GetRepoRequest) {
    const { username } = request;
    const result = await this.githubService.getUserRepos(username);
    const repos = result.map<Repo>((repo) => {
      const { owner } = repo;
      return RepoInfoViewModel.toHTTP(repo, UserInfoViewModel.toHTTP(owner));
    });
    return { repos };
  }
}
