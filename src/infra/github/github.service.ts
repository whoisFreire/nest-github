import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { User } from '../../application/entities/user';
import { Repo } from '../../application/entities/repo';
import { GithubServiceInterface } from './interfaces/githubService.interface';

@Injectable()
export class GithubService implements GithubServiceInterface {
  constructor(private readonly httpService: HttpService) {}
  private baseURL = process.env.BASE_URL;

  async getUserInfo(username: string) {
    try {
      const { status, data } = await lastValueFrom(
        this.httpService.get<User>(`${this.baseURL}/${username}`),
      );
      if (status === HttpStatus.OK) {
        return data;
      }
    } catch (err) {
      throw new NotFoundException('Invalid user');
    }
  }

  async getUserRepos(username: string) {
    try {
      const { status, data } = await lastValueFrom(
        this.httpService.get<Repo[]>(`${this.baseURL}/${username}/repos`),
      );
      if (status === HttpStatus.OK && data.length > 0) {
        return data;
      }
      throw new NotFoundException('Invalid user');
    } catch (err) {
      throw new NotFoundException('Invalid user');
    }
  }

  async getUserReposFilter(username: string, filter: string) {
    try {
      const { status, data } = await lastValueFrom(
        this.httpService.get<Repo[]>(
          `${this.baseURL}/${username}/repos?${filter}`,
        ),
      );
      if (status === HttpStatus.OK && data.length > 0) {
        return data;
      }
      throw new NotFoundException('Invalid user');
    } catch (err) {
      throw new NotFoundException('Invalid user');
    }
  }
}
