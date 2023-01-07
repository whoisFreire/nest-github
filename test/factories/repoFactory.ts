import { Repo } from '../../src/application/entities/repo';
import { userFactory } from './userFactory';

export function repoFactory(): Repo {
  return {
    name: 'bfw-poc1',
    full_name: 'TESTE',
    private: true,
    owner: userFactory(),
    html_url: 'teste',
    description: 'teste',
    fork: false,
    url: 'teste',
    created_at: new Date(),
    updated_at: new Date(),
    pushed_at: new Date(),
    language: 'teste',
    watchers: 0,
    default_branch: 'teste',
  };
}
