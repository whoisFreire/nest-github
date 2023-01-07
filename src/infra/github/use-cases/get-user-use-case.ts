import { Injectable } from '@nestjs/common';
import { GithubServiceInterface } from '../interfaces/githubService.interface';
import { UserInfoViewModel } from '../viewModels/user-info-view-model';

interface GetUserRequest {
  username: string;
}

@Injectable()
export class GetUserUseCase {
  constructor(private readonly githubService: GithubServiceInterface) {}

  async execute(request: GetUserRequest) {
    const { username } = request;
    const user = await this.githubService.getUserInfo(username);
    return { user: UserInfoViewModel.toHTTP(user) };
  }
}
