import './App.css';

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import PageCadastro from './Pages/PageCadastro';
import PageMain from './Pages/PageMain';
import PageLogin from './Pages/PageLogin';

export default function App() {
  return (
    <Router>
      <div className="links">
        <Link to="/main">Home</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/">Logout</Link>
        <Switch>
          <Route path="/" exact component={PageLogin} />
          <Route path="/main" exact component={PageMain} />
          <Route path="/cadastro" component={PageCadastro} />
        </Switch>
      </div>
    </Router>
  );
}
