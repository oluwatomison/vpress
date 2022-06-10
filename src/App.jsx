import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './routers';
import {storeFactory} from './store/store';

function App() {
  let initialState = {};
  const store = storeFactory(initialState);
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
