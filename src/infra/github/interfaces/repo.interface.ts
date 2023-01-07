import { User } from './user.interface';

export interface Repo {
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  html_url: string;
  description?: any;
  fork: boolean;
  url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  language: string;
  watchers: number;
  default_branch: string;
}
