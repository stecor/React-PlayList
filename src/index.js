import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
