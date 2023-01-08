import { HttpService } from '@nestjs/axios';
import { userFactory } from '../../../../test/factories/userFactory';
import { GithubService } from '../github.service';
import { GithubServiceInterface } from '../interfaces/githubService.interface';
import { GetUserUseCase } from './get-user-use-case';

describe('getRepoWithFilterUseCase', () => {
  let githubService: GithubServiceInterface;
  let getUserUseCase: GetUserUseCase;
  let httpService: HttpService;
  beforeEach(() => {
    httpService = new HttpService();
    githubService = new GithubService(httpService);
    getUserUseCase = new GetUserUseCase(githubService);
  });

  it('should be able to return user repo successfully', async () => {
    const expected = { user: userFactory() };
    jest
      .spyOn(getUserUseCase, 'execute')
      .mockResolvedValueOnce({ user: userFactory() });

    const result = await getUserUseCase.execute({
      username: 'teste',
    });
    expect(result).toEqual(expected);
  });
});
