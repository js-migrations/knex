import MigrationDictionary from '@js-migrations/core/dist/utils/types/MigrationDictionary';
import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async (): Promise<MigrationDictionary> => {
    return config.migrations;
  };
};
