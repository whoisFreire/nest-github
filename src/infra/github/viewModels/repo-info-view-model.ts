import { Repo } from '../../../application/entities/repo';
import { User } from '../../../application/entities/user';

export class RepoInfoViewModel {
  static toHTTP(rawRepo: Repo, user: User) {
    const {
      name,
      full_name,
      private: repoPrivate,
      html_url,
      description,
      fork,
      url,
      created_at,
      updated_at,
      pushed_at,
      language,
      watchers,
      default_branch,
    } = rawRepo;

    const repo: Repo = {
      name,
      full_name,
      private: repoPrivate,
      owner: user,
      html_url,
      description,
      fork,
      url,
      created_at,
      updated_at,
      pushed_at,
      language,
      watchers,
      default_branch,
    };
    return repo;
  }
}
