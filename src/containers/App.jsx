import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { configureStore } from '../store';
import { Layout } from '../modules/layout';
import { People } from '../modules/people';

import './global.scss';

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={People} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </Provider>
);
