import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import JournalListPage from '../../routes/JournalListPage/JournalListPage'
import JournalPage from '../../routes/JournalPage/JournalPage'
import AffirmationListPage from '../../routes/AffirmationListPage/AffirmationListPage'
import AffirmationPage from '../../routes/AffirmationPage/AffirmationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import AddJournalPage from '../../routes/AddJournalPage/AddJournalPage'
import AddAffirmationPage from '../../routes/AddAffirmationPage/AddAffirmationPage'
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              exact
              path={'/journals'}
              component={JournalListPage}
            />
            <PrivateRoute
              exact
              path={'/addJournal'}
              component={AddJournalPage}
            />
            <PrivateRoute
              path={'/journals/:journalId'}
              component={JournalPage}
            />
            <Route
              exact
              path={'/affirmations'}
              component={AffirmationListPage}
            />
            <PrivateRoute
              exact
              path={'/addAffirmation'}
              component={AddAffirmationPage}
            />
            <Route
              path={'/affirmations/:affirmationId'}
              component={AffirmationPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
