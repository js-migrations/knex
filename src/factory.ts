import RepoFacade from '@js-migrations/core/dist/RepoFacade';
import FacadeConfig from './FacadeConfig';
import FactoryConfig from './FactoryConfig';
import clearMigrations from './functions/clearMigrations';
import getProcessedMigrations from './functions/getProcessedMigrations';
import removeProcessedMigration from './functions/removeProcessedMigration';
import updateProcessedMigrations from './functions/updateProcessedMigrations';

export default (factoryConfig: FactoryConfig): RepoFacade => {
  const facadeConfig: FacadeConfig = {
    tableName: 'migrations',
    ...factoryConfig,
  };
  return {
    clearMigrations: clearMigrations(facadeConfig),
    getProcessedMigrations: getProcessedMigrations(facadeConfig),
    removeProcessedMigration: removeProcessedMigration(facadeConfig),
    updateProcessedMigration: updateProcessedMigrations(facadeConfig),
  };
};
