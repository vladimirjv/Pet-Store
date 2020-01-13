import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/api/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.ts'),
  outputAs: 'class',
  watch: true,
});
