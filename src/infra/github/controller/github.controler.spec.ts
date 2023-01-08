import { repoFactory } from '../../../../test/factories/repoFactory';
import { userFactory } from '../../../../test/factories/userFactory';
import { GithubQuerySearch } from '../swagger/querys/github-query-search';
import { GetRepoUseCase } from '../use-cases/get-repo-use-case';
import { GetRepoWithFilterUseCase } from '../use-cases/get-repo-with-filter-use-case';
import { GetUserUseCase } from '../use-cases/get-user-use-case';
import { GithubController } from './github.controller';

describe('GithubController', () => {
  let githubController: GithubController;
  const getRepoUseCase: GetRepoUseCase = {
    execute: jest.fn(),
  } as unknown as GetRepoUseCase;
  const getUserUseCase: GetUserUseCase = {
    execute: jest.fn(),
  } as unknown as GetUserUseCase;

  const getRepoWithFilterUseCase: GetRepoWithFilterUseCase =
    {} as GetRepoWithFilterUseCase;

  beforeEach(() => {
    githubController = new GithubController(
      getRepoUseCase,
      getUserUseCase,
      getRepoWithFilterUseCase,
    );
  });

  describe('getUser', () => {
    it('should be able to return a response with user Type', async () => {
      const result = { user: userFactory() };
      jest.spyOn(getUserUseCase, 'execute').mockResolvedValueOnce(result);
      expect(await githubController.getUser('test')).toBe(result);
    });
  });

  describe('GetRepos', () => {
    it('should be able to return a response with Repo Type', async () => {
      const result = { repos: [repoFactory()] };
      jest.spyOn(getRepoUseCase, 'execute').mockResolvedValueOnce(result);
      expect(
        await githubController.getRepos('test', {} as GithubQuerySearch),
      ).toBe(result);
    });
  });
});
