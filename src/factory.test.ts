import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import serviceFactory from '@js-migrations/core/dist/factory';
import factoryTest from '@js-migrations/core/dist/factoryTest';
import { config } from 'dotenv';
import repoFactory from './factory';
import connectToDb from './utils/connectToDb';
config();

const dbConfig = {
  client: 'mysql',
  connection: {
    database: process.env.KNEX_DATABASE,
    host: '127.0.0.1',
    ...(process.env.KNEX_PASSWORD === undefined ? {} : {
      password: process.env.KNEX_PASSWORD,
    }),
    user: process.env.KNEX_USER,
  },
};

factoryTest((migrations) => {
  const repo = repoFactory({
    db: connectToDb(dbConfig),
    lockTableName: 'migrationsLock',
    migrations,
    tableName: 'migrations',
  });
  return serviceFactory({ repo });
});
