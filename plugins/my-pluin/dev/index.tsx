import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myPluinPlugin, MyPluinPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myPluinPlugin)
  .addPage({
    element: <MyPluinPage />,
    title: 'Root Page',
    path: '/my-pluin',
  })
  .render();
