import * as knex from 'knex';

export default interface FacadeConfig {
  readonly db: () => Promise<knex>;
  readonly tableName: string;
  readonly lockTableName: string;
}
