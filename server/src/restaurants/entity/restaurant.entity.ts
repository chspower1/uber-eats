import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => String)
  location: string;

  @Field(() => Boolean)
  isVegan: boolean;
}
