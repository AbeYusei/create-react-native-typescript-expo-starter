import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'containers';
import { createStore } from 'redux';
import { state } from 'state';
import { SampleModule } from 'modules';

const store = createStore(SampleModule.reducer, state);
export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
