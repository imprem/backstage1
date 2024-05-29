// import { GithubEntityProvider } from '@backstage/plugin-catalog-backend-module-github';
// import { Router } from 'express-serve-static-core';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-catalog-backend-module-scaffolder-entity-model';
import { PluginEnvironment } from '../types';
import { Router } from 'express';
// import { scaffolderActionConditions } from '@backstage/plugin-scaffolder-backend/dist/alpha';
import { CatalogBuilder } from '@backstage/plugin-catalog-backend';


export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  builder.addProcessor(new ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
//   builder.addEntityProvider(
//     GithubEntityProvider.fromConfig(env.config, {
//       logger: env.logger,
//       scheduler: env.scheduler,
//     }),
//   );

  // ..
}