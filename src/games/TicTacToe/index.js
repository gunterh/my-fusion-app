import React from 'react';
import {split} from 'fusion-react';

const ClientRenderedOnly = split({
  defer: true,
  load: () => import('./component'),
  LoadingComponent: () => <div></div>,
  ErrorComponent: () => <div>Error</div>,
});

export default ClientRenderedOnly;