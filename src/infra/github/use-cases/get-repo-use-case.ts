import { Injectable } from '@nestjs/common';
import { GithubService } from '../github.service';
import { Repo } from '../interfaces/repo.interface';
import { RepoInfoViewModel } from '../viewModels/repo-info-view-model';
import { UserInfoViewModel } from '../viewModels/user-info-view-model';

interface GetRepoRequest {
  username: string;
}

@Injectable()
export class GetRepoUseCase {
  constructor(private readonly githubService: GithubService) {}

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
