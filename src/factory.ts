import RepoFacade from '@js-migrations/core/dist/RepoFacade';
import FacadeConfig from './FacadeConfig';
import MissingMigrationError from './MissingMigrationError';

export default (config: FacadeConfig): RepoFacade => {
  const createTable = async () => {
    const db = await config.db();
    const hasTable = await Promise.resolve(db.schema.hasTable(config.tableName));
    if (!hasTable) {
      await Promise.resolve(db.schema.createTable(config.tableName, (builder) => {
        builder.string('key').unique();
        builder.dateTime('lastStart');
        builder.dateTime('lastBatch');
      }));
    }
    return db;
  };
  return {
    clearMigrations: async () => {
      const db = await config.db();
      await Promise.resolve(db.schema.dropTableIfExists(config.tableName));
    },
    getProcessedMigrations: async () => {
      await createTable();
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
    },
    removeProcessedMigration: async (key) => {
      await createTable();
      const table = (await config.db()).table(config.tableName);
      await Promise.resolve(table.where({ key }).del());
    },
    updateProcessedMigration: async (migration) => {
      await createTable();
      const table = (await config.db()).table(config.tableName);
      const doc = await Promise.resolve(table.where({ key: migration.key }).update(migration));
      if (!doc) {
        await Promise.resolve(table.insert(migration));
      }
    },
  };
};
