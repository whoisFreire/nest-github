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
    created_at: new Date('2020-06-08T18:57:37Z'),
    updated_at: new Date('2020-06-08T18:57:37Z'),
    pushed_at: new Date('2020-06-08T18:57:37Z'),
    language: 'teste',
    watchers: 0,
    default_branch: 'teste',
  };
}
