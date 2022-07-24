import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field((type) => ID)
  id: string;
  name: string;
  displayName: string;
  publicVisible: boolean;
  loginStrategies: string[];
  theme: string;
  gyazoTeamsName: string | null;
  googleAnalyticsCode: string | null;
  image?: string;
  created: number;
  updated: number;
  // isMember: boolean;
}
