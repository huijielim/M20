import React from 'react';
import * as ReactDOM from 'react-dom';
// 1 - import { render, screen } from '@testing-library/react';
// 2 - import {getQueriesForElement} from '@testing-library/dom';
// 3 - import {getQueriesForElement} from '@testing-library/react';
import {render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// 2
// test('ToDo', () => {
//     const root = document.createElement('div');
//     ReactDOM.render(<App/>, root);
//     const {getByText, getByLabelText} = getQueriesForElement(root);

// 3
// if pull render function from @testing-library/react
// function render(component){
//     const root = document.createElement('div');
//     ReactDOM.render(component, root);
//     return getQueriesForElement(root);
// }

// test('ToDo', () => {  
//   const {getByText, getByLabelText} = render(<App/>);

    // after rendering our component
    // use DOM APIs (query selector) to make assertions 
    // expect(root.querySelector('h1').textContent).toBe('TODO');
    // expect(root.querySelector('label').textContent).toBe('Add todo:');
    // expect(root.querySelector('button').textContent).toBe('Add #1');

  //   expect(getByText('TODO')).not.toBeNull();
  //   expect(getByLabelText('Add todo:')).not.toBeNull();
  //   expect(getByText('Add #1')).not.toBeNull();
  // });
  
// -------

test('ToDo', () => {
    const {getByText, getByLabelText} = render(<App/>);

    getByText('TODO');
    getByLabelText('Add todo:');
    getByText('Add #1');
});

test('add items to list', () => {
    const {getByText, getByLabelText} = render(<App/>);

    getByText('TODO');
    const input = getByLabelText('Add todo:');
    fireEvent.change(input, {target:{value: 'wash car'}});
    fireEvent.click(getByText('Add #1'));

    // confirm data
    getByText('Add #2');
    getByText('wash car');
});

//userEvent expresses intent better
test('user-events allows users too add...', () => {
  const { getByText, getByLabelText } = render(<App/>);

  const input = getByLabelText('Add todo:');
  const button = getByText('Add #1');

  userEvent.type(input, 'Learn spanish');
  userEvent.click(button);

  getByText('Learn spanish');
  getByText('Add #2');

})