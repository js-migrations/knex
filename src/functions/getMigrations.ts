import Migration from '@js-migrations/core/dist/utils/types/Migration';
import FacadeConfig from '../FacadeConfig';

export default (config: FacadeConfig) => {
  return async (): Promise<Migration[]> => {
    return config.migrations;
  };
};
