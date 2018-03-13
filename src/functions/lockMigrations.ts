import LockedMigrationsError from '@js-migrations/core/dist/utils/errors/LockedMigrationsError';
import FacadeConfig from '../FacadeConfig';

const tableAlreadyExistsError = 1050;

export default (config: FacadeConfig) => {
  return async () => {
    const db = await config.db();
    try {
      await Promise.resolve(db.schema.createTable(config.lockTableName, (builder) => {
        builder.boolean('locked');
      }));
    } catch (err) {
      if (err.errno === tableAlreadyExistsError) {
        throw new LockedMigrationsError();
      }
      /* istanbul ignore next */
      throw err;
    }
  };
};
