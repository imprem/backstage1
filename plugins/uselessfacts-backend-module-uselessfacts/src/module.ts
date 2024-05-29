import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

export const uselessfactsModuleUselessfacts = createBackendModule({
  pluginId: 'uselessfacts',
  moduleId: 'uselessfacts',
  register(reg) {
    reg.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        logger.info('Hello World!');
      },
    });
  },
});
