import React from 'react';
import ReactDOM from 'react-dom';
import AddAffirmationForm from './AddAffirmationForm'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <AddAffirmationForm />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
