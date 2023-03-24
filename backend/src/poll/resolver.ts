import {Arg, Args, Mutation, Query, Resolver} from 'type-graphql';
import {Poll} from './schema';
import {PollService} from './service';

@Resolver()
export class PollResolver {
  @Query(() => [Poll])
  async Poll(
    @Arg('input') id: string //input the id of the poll to display the options for
  ): Promise<Poll[]> {
    return new PollService().list(id);
  }

  @Mutation(() => Poll)
  async addPoll(
    //@Arg("input") input: Poll,
    @Arg('input') id: string //input the id of the question
    //@Ctx() request: Request
  ): Promise<Poll> {
    return new PollService().add(id);
  }
}
