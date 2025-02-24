import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-holographic-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
