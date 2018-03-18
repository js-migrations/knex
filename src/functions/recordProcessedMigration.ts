import ProcessedMigration from '@js-migrations/core/dist/utils/types/ProcessedMigration';
import FacadeConfig from '../FacadeConfig';
import createTable from '../utils/createTable';

export default (config: FacadeConfig) => {
  return async (migration: ProcessedMigration) => {
    await createTable(config);
    const table = (await config.db()).table(config.tableName);
    await Promise.resolve(table.insert(migration));
  };
};
