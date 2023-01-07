import { Module } from '@nestjs/common';
import { GithubModule } from './infra/github/github.module';

@Module({
  imports: [GithubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
