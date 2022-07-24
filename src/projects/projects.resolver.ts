import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProjectWithPage } from './models/project-with-page.model';
import { Project } from './models/project.model';
import { ProjectsService } from './projects.service';

@Resolver()
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query((returns) => Project, { description: 'プロジェクトの情報を取得する' })
  async getByProjectName(@Args('projectName') projectName: string) {
    return this.projectsService.getByProjectName(projectName);
  }

  @Query((returns) => ProjectWithPage, {
    description: 'プロジェクト名からページ一覧を取得する',
  })
  async getPagesByProjectName(@Args('projectName', {}) projectName: string) {
    return this.projectsService.getPagesByProjectName(projectName);
  }
}
