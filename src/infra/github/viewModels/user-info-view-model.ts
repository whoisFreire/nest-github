import { User } from '../interfaces/user.interface';

export class UserInfoViewModel {
  static toHTTP(rawUser: User) {
    const {
      login,
      avatar_url,
      url,
      html_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      twitter_username,
      public_gists,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    } = rawUser;

    const user: User = {
      login,
      avatar_url,
      url,
      html_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      updated_at,
    };
    return user;
  }
}
