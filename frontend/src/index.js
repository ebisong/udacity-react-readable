import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Provider store={store()}>
          <App />
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
