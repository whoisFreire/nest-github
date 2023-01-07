import { Injectable } from '@nestjs/common';
import { transformQuerys } from 'src/helpers/transformQuerys';
import { Repo } from '../../../application/entities/repo';
import { RepoInfoViewModel } from '../viewModels/repo-info-view-model';
import { UserInfoViewModel } from '../viewModels/user-info-view-model';
import { GithubServiceInterface } from '../interfaces/githubService.interface';

interface GetRepoWithFilterRequest {
  username: string;
  filter: object;
}

@Injectable()
export class GetRepoWithFilterUseCase {
  constructor(private readonly githubService: GithubServiceInterface) {}
  async execute(request: GetRepoWithFilterRequest) {
    const { username, filter } = request;
    const stringFilter = transformQuerys(filter);
    const result = await this.githubService.getUserReposFilter(
      username,
      stringFilter,
    );
    const repos = result.map<Repo>((repo) => {
      const { owner } = repo;
      return RepoInfoViewModel.toHTTP(repo, UserInfoViewModel.toHTTP(owner));
    });
    return { repos };
  }
}
