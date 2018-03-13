import * as knex from 'knex';

export default interface FactoryConfig {
  readonly db: () => Promise<knex>;
  readonly tableName?: string;
  readonly lockTableName?: string;
}
