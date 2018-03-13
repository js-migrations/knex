# knex
> Implmentation of the js-migrations RepoFacade using Knex

### Usage
1. Install it with `npm i @js-migrations/knex`.
2. Use the factory to create the repository facade.

### Use the factory
```typescript
import factory from '@js-migrations/knex/dist/factory';
import connectToDb from '@js-migrations/knex/dist/utils/connectToDb';

const todosFacade = factory({
  db: connectToDb({
    client: 'mysql',
    connection: {
      database: 'todoapp',
      host: '127.0.0.1',
      password: 'pword',
      user: 'todouser',
    },
  }),
  // Optional property.
  tableName: 'migrations',
});
```
