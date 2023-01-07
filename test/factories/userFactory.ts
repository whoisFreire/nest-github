import { User } from 'src/infra/github/interfaces/user.interface';

export function userFactory(username?: string): User {
  return {
    login: username ?? 'teste',
    avatar_url: 'https://avatars.githubusercontent.com/u/66642358?v=4',
    url: 'https://api.github.com/users/whoisFreire',
    html_url: 'https://github.com/whoisFreire',
    type: 'User',
    name: 'Leonardo Freire ',
    company: 'UOL Inc.',
    blog: '',
    location: 'Brazil',
    email: null,
    bio: 'test',
    twitter_username: 'test',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date('2020-06-08T18:57:37Z'),
    updated_at: new Date('2020-06-08T18:57:37Z'),
  };
}
