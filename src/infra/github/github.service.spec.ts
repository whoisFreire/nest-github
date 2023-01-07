import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { GithubService } from './github.service';
import { of, throwError } from 'rxjs';
import { User } from '../../application/entities/user';
import { userFactory } from '../../../test/factories/userFactory';
import { repoFactory } from '../../../test/factories/repoFactory';
import { Repo } from '../../application/entities/repo';
import { NotFoundException } from '@nestjs/common';
describe('GithubService', () => {
  let githubService: GithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    githubService = module.get<GithubService>(GithubService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(githubService).toBeDefined();
    expect(httpService).toBeDefined();
  });

  describe('getUserInfo', () => {
    it('should be able to return the user info successfully', async () => {
      const expected: User = userFactory('teste');
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: expected,
        }),
      );

      const result = await githubService.getUserInfo('test');
      expect(result).toEqual(expected);
    });

    it('should be able to returns undefined if not found', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 204,
          statusText: 'NO CONTENT',
          config: {},
          headers: {},
          data: [],
        }),
      );
      const result = await githubService.getUserInfo('teste');
      expect(result).toBeUndefined();
    });

    it('should be able to return an error if the return is not success', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(throwError(() => new NotFoundException()));
      expect(githubService.getUserInfo('test')).rejects.toThrowError();
    });
  });

  describe('getUserRepo', () => {
    it('should be able to return the user repo list successfully', async () => {
      const data: Repo[] = [repoFactory()];
      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(
          of({ status: 200, statusText: 'OK', config: {}, headers: {}, data }),
        );

      const result = await githubService.getUserRepos('test');
      expect(result).toEqual(data);
    });

    it('should be able to return an error if the return is not success', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(throwError(() => new NotFoundException()));
      expect(githubService.getUserRepos('test')).rejects.toThrowError();
    });
  });

  describe('GetUserReposFilter', () => {
    it('should be able to return the user repo list filtered by query successfully', async () => {
      const expected: Repo[] = [repoFactory()];

      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: expected,
        }),
      );
    });
  });
});
