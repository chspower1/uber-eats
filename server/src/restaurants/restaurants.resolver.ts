import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dto/create-restaurant';
import { Restaurant } from './entity/restaurant.entity';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [{ name: 'dasd', location: 'Seoul', isVegan: true }];
  }
  @Query(() => Restaurant)
  restaurant(): Restaurant {
    return { name: 'dasd', location: 'Seoul', isVegan: true };
  }

  @Mutation(() => Boolean)
  createRestaurant(
    @Args() { name, location, isVegan }: CreateRestaurantDto,
  ): boolean {
    console.log(name, location, isVegan);
    return true;
  }
}
