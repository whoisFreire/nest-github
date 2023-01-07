import { Repo } from 'src/application/entities/repo';
import { User } from 'src/application/entities/user';

export abstract class GithubServiceInterface {
  abstract getUserInfo(username: string): Promise<User>;
  abstract getUserRepos(username: string): Promise<Repo[]>;
  abstract getUserReposFilter(
    username: string,
    filter: string,
  ): Promise<Repo[]>;
}
