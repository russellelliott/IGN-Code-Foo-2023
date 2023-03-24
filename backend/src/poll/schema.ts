import {ArgsType, Field, InputType, ObjectType} from 'type-graphql';
import {Length} from 'class-validator';
import {GraphQLUUID} from 'graphql-scalars';

@ObjectType()
@InputType('PollInput')
export class Poll {
  @Field({nullable: true})
  id!: string;
  @Field({nullable: true})
  parent!: string;
  @Field()
  data!: string;
  @Field()
  votes!: string;
}