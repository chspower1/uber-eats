import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  location: string;

  @Field(() => Boolean)
  isVegan: boolean;
}
