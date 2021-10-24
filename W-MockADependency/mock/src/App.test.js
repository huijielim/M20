import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./MyComponent', ()=> ()=> (<div>Hello World</div>));

test('mocking test', () => {
  const {container} = render(<App/>);
  expect(container.textContent).toMatch('Hello World');
});
