import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthorInput {
  @Field()
  id: string
  @Field()
  name: string
  @Field(() => Int)
  code: number
}
