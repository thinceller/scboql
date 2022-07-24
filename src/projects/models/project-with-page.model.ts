import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectWithPage {
  projectName: string;
  skip: number;
  limit: number;
  count: number;
  pages: Page[];
}

@ObjectType()
export class Page {
  id: string;
  title: string;
  image: string | null;
  descriptions: string[];
  user: User;
  pin: number; // pinされてないときは0
  views: number;
  linked: number;
  commitId: string;
  created: number;
  updated: number;
  accessed: number;
  lastAccessed?: number;
  snapshotCreated: number | null;
  pageRank: number;
}

@ObjectType()
export class User {
  id: string;
}
