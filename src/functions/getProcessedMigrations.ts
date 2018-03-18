import ProcessedMigration from '@js-migrations/core/dist/utils/types/ProcessedMigration';
import FacadeConfig from '../FacadeConfig';
import createTable from '../utils/createTable';

export default (config: FacadeConfig) => {
  return async () => {
    await createTable(config);
    const table = (await config.db()).table(config.tableName);
    const docs = await Promise.resolve(table.whereNotNull('key'));
    const migrations = docs.map((doc: any): ProcessedMigration => {
      return {
        batchStart: new Date(doc.batchStart),
        key: doc.key,
        processEnd: new Date(doc.processEnd),
        processStart: new Date(doc.processStart),
      };
    });
    return migrations;
  };
};
