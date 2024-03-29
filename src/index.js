import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'components/Store/store';
import './index.css';

// import { persistor, store } from 'components/Store/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
