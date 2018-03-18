import FacadeConfig from '../FacadeConfig';

export default async (config: FacadeConfig) => {
  const db = await config.db();
  const hasTable = await Promise.resolve(db.schema.hasTable(config.tableName));
  if (hasTable) {
    return;
  }
  await Promise.resolve(db.schema.createTable(config.tableName, (builder) => {
    builder.string('key');
    builder.dateTime('batchStart');
    builder.dateTime('processStart');
    builder.dateTime('processEnd');
  }));
};
