import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';
import Header from './Header';
import Main from './Main';
import NoMatch from './NoMatch';

const App = props => (
  <div className="container">
    <Header />

    <Switch>
      <Route exact path='/' render={(props) => <Main /> } />
      <Route path='/page/:page' render={(props) => <Main currentPage={Number(props.match.params.page) || 1} /> } />
      <Route path='/tag/:tag/(page)*/:page?' render={(props) => <Main tag={props.match.params.tag} currentPage={Number(props.match.params.page) || 1} /> } />
      <Route path='/post/:id/:slug' render={(props) => <Main currentPage={1} id={Number(props.match.params.id)} /> } />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;