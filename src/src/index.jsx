import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import LogRocket from 'logrocket';

LogRocket.init('ksqh7f/sayathing');
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
