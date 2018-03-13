import FacadeConfig from '../FacadeConfig';
import createTable from '../utils/createTable';

export default (config: FacadeConfig) => {
  return async () => {
    await createTable(config);
    const table = (await config.db()).table(config.tableName);
    const docs = await Promise.resolve(table.whereNotNull('key'));
    const migrations = docs.map((doc: any) => {
      return {
        key: doc.key,
        lastBatch: new Date(doc.lastBatch),
        lastStart: new Date(doc.lastStart),
      };
    });
    return migrations;
  };
};
