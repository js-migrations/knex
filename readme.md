# knex
> Implmentation of the js-migrations RepoFacade using Knex

### Usage
1. Install it with `npm i @js-migrations/knex`.
1. [Use the factory to create the repository facade](#use-the-factory).
1. [Use the facade with the @js-migrations/core service](https://github.com/js-migrations/core#use-the-factory).

### Use the factory
```typescript
import knexMigrationsRepoFactory from '@js-migrations/knex/dist/factory';
import connectToDb from '@js-migrations/knex/dist/utils/connectToDb';

const migrationsRepoFacade = knexMigrationsRepoFactory({
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
  lockTableName: 'migrationsLock',
  // Optional property.
  migrations: [{
    down: async () => {},
    key: 'your_migration_name',
    up: async () => {},
  }],
  // Optional property.
  tableName: 'migrations',
});
```
