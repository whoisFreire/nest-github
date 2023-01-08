import { HttpService } from '@nestjs/axios';
import { repoFactory } from '../../../../test/factories/repoFactory';
import { GithubService } from '../github.service';
import { GithubServiceInterface } from '../interfaces/githubService.interface';
import { GetRepoWithFilterUseCase } from './get-repo-with-filter-use-case';

describe('getRepoWithFilterUseCase', () => {
  let githubService: GithubServiceInterface;
  let getRepoWithFilterUseCase: GetRepoWithFilterUseCase;
  let httpService: HttpService;
  beforeEach(() => {
    httpService = new HttpService();
    githubService = new GithubService(httpService);
    getRepoWithFilterUseCase = new GetRepoWithFilterUseCase(githubService);
  });

  it('should be able to return user repo successfully', async () => {
    const expected = { repos: [repoFactory()] };
    jest
      .spyOn(getRepoWithFilterUseCase, 'execute')
      .mockResolvedValueOnce({ repos: [repoFactory()] });

    const result = await getRepoWithFilterUseCase.execute({
      username: 'teste',
      filter: { test: 'test' },
    });
    expect(result).toEqual(expected);
  });
});
