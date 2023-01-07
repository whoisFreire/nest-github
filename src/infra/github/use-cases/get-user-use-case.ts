import { Injectable } from '@nestjs/common';
import { GithubService } from '../github.service';
import { UserInfoViewModel } from '../viewModels/user-info-view-model';

interface GetUserRequest {
  username: string;
}

@Injectable()
export class GetUserUseCase {
  constructor(private readonly githubService: GithubService) {}

  async execute(request: GetUserRequest) {
    const { username } = request;
    const user = await this.githubService.getUserInfo(username);
    return { user: UserInfoViewModel.toHTTP(user) };
  }
}
