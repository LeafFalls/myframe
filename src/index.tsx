import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

const App = lazy(() => import('./app'));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App name="React" />
  </Suspense>,
  document.querySelector('#root'),
);
