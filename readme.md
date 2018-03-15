# knex
> Implmentation of the js-migrations RepoFacade using Knex

### Usage
1. Install it with `npm i @js-migrations/knex`.
1. [Use the factory to create the repository facade](#use-the-factory).
1. [Use the facade with the @js-migrations/core service](https://github.com/js-migrations/core#use-the-factory).

#### Use the factory
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

### Alternatives
There are a couple of notable alternatives to the JS-Migrations packages for Knex.

- The [CLI and API built into Knex JS itself](http://knexjs.org/#Migrations).
- The [knex-migrate package](https://github.com/sheerun/knex-migrate) made by [@sheerun](https://github.com/sheerun).

These packages are however focused on processing migration files rather than migration objects which makes type checking and composition more difficult. Type checking is more difficult because the files are dynamically imported at runtime, hence they cannot be analysed statically at compile time. Composition is more difficult because all of the migration files must be located in one directory, which may be challenging if you have more than one storage implementation requiring migrations (e.g. database storage and file storage).
