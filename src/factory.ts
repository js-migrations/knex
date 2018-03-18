import RepoFacade from '@js-migrations/core/dist/RepoFacade';
import FacadeConfig from './FacadeConfig';
import FactoryConfig from './FactoryConfig';
import clearMigrations from './functions/clearMigrations';
import getMigrations from './functions/getMigrations';
import getProcessedMigrations from './functions/getProcessedMigrations';
import lockMigrations from './functions/lockMigrations';
import recordProcessedMigration from './functions/recordProcessedMigration';
import removeProcessedMigration from './functions/removeProcessedMigration';
import unlockMigrations from './functions/unlockMigrations';

export default (factoryConfig: FactoryConfig): RepoFacade => {
  const facadeConfig: FacadeConfig = {
    lockTableName: 'migrationsLock',
    migrations: [],
    tableName: 'migrations',
    ...factoryConfig,
  };
  return {
    clearMigrations: clearMigrations(facadeConfig),
    getMigrations: getMigrations(facadeConfig),
    getProcessedMigrations: getProcessedMigrations(facadeConfig),
    lockMigrations: lockMigrations(facadeConfig),
    recordProcessedMigration: recordProcessedMigration(facadeConfig),
    removeProcessedMigration: removeProcessedMigration(facadeConfig),
    unlockMigrations: unlockMigrations(facadeConfig),
  };
};
