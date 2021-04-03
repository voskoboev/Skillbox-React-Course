import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './Header';
import wrapper from 'example.ts';

window.addEventListener('load', () => {
  ReactDOM.render(<Header />, document.getElementById('react_root'));
});

