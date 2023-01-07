export interface User {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  type: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email?: any;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
