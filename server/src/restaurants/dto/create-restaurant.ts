import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, IsBoolean, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(2, 6)
  name: string;

  @Field(() => String)
  @IsString()
  location: string;

  @Field(() => Boolean)
  @IsBoolean()
  isVegan: boolean;
}
