import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myPluinPlugin = createPlugin({
  id: 'my-pluin',
  routes: {
    root: rootRouteRef,
  },
});

export const MyPluinPage = myPluinPlugin.provide(
  createRoutableExtension({
    name: 'MyPluinPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

export const EntityMtAwesomPluginCard = myPluinPlugin.provide(
  createRoutableExtension({
    name: 'MyPluinPage',
    component: () =>
      import('./components/EntityOverviewCard').then(m => m.EntityOverviewCard),
    mountPoint: rootRouteRef,
  }),
);