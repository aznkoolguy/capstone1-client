import React from 'react';
import ReactDOM from 'react-dom';
import AddJournalForm from './AddJournalForm'
import { BrowserRouter } from 'react-router-dom';

it('should render login page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <AddJournalForm />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
