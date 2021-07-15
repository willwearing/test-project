import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class ArticleCreateDTO {
  @Field()
  title: string;

  @Field()
  date: string;

  @Field()
  content: string;

  @Field()
  author: string;


}
