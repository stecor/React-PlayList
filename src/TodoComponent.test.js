import React from 'react';
import ReactDOM from 'react-dom';
import TodoComponent from './TodoComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoComponent />, div);
});
