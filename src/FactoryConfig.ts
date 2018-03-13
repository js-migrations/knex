import MigrationDictionary from '@js-migrations/core/dist/utils/types/MigrationDictionary';
import * as knex from 'knex';

export default interface FactoryConfig {
  readonly db: () => Promise<knex>;
  readonly lockTableName?: string;
  readonly migrations?: MigrationDictionary;
  readonly tableName?: string;
}
