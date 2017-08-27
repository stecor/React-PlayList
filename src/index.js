import React from 'react';
import ReactDOM from 'react-dom';
import TodoComponent from './TodoComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoComponent />, document.getElementById('root'));
registerServiceWorker();
