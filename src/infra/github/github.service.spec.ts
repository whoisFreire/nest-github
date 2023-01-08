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

    it('should be able to return error if not found', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(
          throwError(() => new NotFoundException('Invalid user')),
        );
      expect(() => githubService.getUserInfo('teste')).rejects.toThrow(
        new NotFoundException('Invalid user'),
      );
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

    it('should be able to return an error if the status code equal 204', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 204,
          statusText: 'NO CONTENT',
          config: {},
          headers: {},
          data: [],
        }),
      );

      expect(githubService.getUserRepos('test')).rejects.toThrowError(
        'Invalid user',
      );
      expect(httpService.get).toBeCalledTimes(1);
    });

    it('should be able to return an error if the status code equal 200 but the data content is empty', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: [],
        }),
      );

      expect(githubService.getUserRepos('test')).rejects.toThrowError(
        'Invalid user',
      );
      expect(httpService.get).toBeCalledTimes(1);
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
      const result: Repo[] = await githubService.getUserReposFilter(
        'test',
        'test',
      );
      expect(expected).toEqual(result);
    });

    it('should be able to return an error if the status code equal 204', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 204,
          statusText: 'NO CONTENT',
          config: {},
          headers: {},
          data: [],
        }),
      );
      expect(
        githubService.getUserReposFilter('test', 'teste'),
      ).rejects.toThrowError('Invalid user');
      expect(httpService.get).toBeCalledTimes(1);
    });

    it('should be able to return an error if the status code equal 200 but data content is empty', async () => {
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: [],
        }),
      );
      expect(
        githubService.getUserReposFilter('test', 'teste'),
      ).rejects.toThrowError('Invalid user');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });
});
