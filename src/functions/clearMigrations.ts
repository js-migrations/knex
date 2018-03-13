import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async () => {
    const db = await config.db();
    await Promise.resolve(db.schema.dropTableIfExists(config.tableName));
  };
};
