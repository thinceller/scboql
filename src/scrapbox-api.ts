import { RESTDataSource } from 'apollo-datasource-rest';

export class ScrapboxApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://scrapbox.io/';
  }

  async getPagesByProjectName(projectName: string) {
    return this.get(`api/pages/${projectName}`);
  }

  async getProjectByName(projectName: string) {
    return this.get(`api/projects/${projectName}`);
  }
}
