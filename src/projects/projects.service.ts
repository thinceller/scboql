import { Inject, Injectable, Scope } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { ScrapboxApi } from 'src/scrapbox-api';

@Injectable({ scope: Scope.REQUEST })
export class ProjectsService {
  constructor(
    @Inject(CONTEXT)
    private context: { dataSources: { scrapboxAPI: ScrapboxApi } },
  ) {}

  getByProjectName(projectName: string) {
    return this.context.dataSources.scrapboxAPI.getProjectByName(projectName);
  }

  getPagesByProjectName(projectName: string) {
    return this.context.dataSources.scrapboxAPI.getPagesByProjectName(
      projectName,
    );
  }
}
