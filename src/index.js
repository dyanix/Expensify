import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider  appId='ac85bbdf-3bab-425c-a82f-19ad6e5a9b92' language='en-US' >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
); 