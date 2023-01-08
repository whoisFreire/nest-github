import { HttpService } from '@nestjs/axios';
import { repoFactory } from '../../../../test/factories/repoFactory';
import { GithubService } from '../github.service';
import { GithubServiceInterface } from '../interfaces/githubService.interface';
import { GetRepoUseCase } from './get-repo-use-case';

describe('getRepoUseCase', () => {
  let githubService: GithubServiceInterface;
  let getRepoUseCase: GetRepoUseCase;
  let httpService: HttpService;
  beforeEach(() => {
    httpService = new HttpService();
    githubService = new GithubService(httpService);
    getRepoUseCase = new GetRepoUseCase(githubService);
  });

  it('should be able to return user repo successfully', async () => {
    const expected = { repos: [repoFactory()] };
    jest
      .spyOn(getRepoUseCase, 'execute')
      .mockResolvedValueOnce({ repos: [repoFactory()] });

    const result = await getRepoUseCase.execute({ username: 'teste' });
    expect(result).toEqual(expected);
  });
});
