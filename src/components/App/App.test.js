import React, { render } from 'preact';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
