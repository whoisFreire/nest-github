import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { User } from './interfaces/user.interface';
import { Repo } from './interfaces/repo.interface';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}
  private baseURL = 'https://api.github.com/users';

  async getUserInfo(username: string) {
    try {
      const { status, data } = await lastValueFrom(
        this.httpService.get<User>(`${this.baseURL}/${username}`),
      );
      if (status === HttpStatus.OK) {
        return data;
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async getUserRepos(username: string) {
    let repo: Repo[] = [];
    try {
      const { status, data } = await lastValueFrom(
        this.httpService.get<Repo[]>(`${this.baseURL}/${username}/repos`),
      );
      if (status === HttpStatus.OK) {
        repo = data;
      }
      return repo;
    } catch (err) {
      throw new Error(err);
    }
  }
}
