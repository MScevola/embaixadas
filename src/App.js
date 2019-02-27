import React, { Component } from "react";
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import RecuperarSenha from './pages/recuperarSenha';
import Inscricoes from './pages/inscricoes';

const AppContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  background: #E6E6E6;
  margin: 0;
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  height: auto;
  color: #444;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path='/cadastrar' component={Cadastrar} />
          <Route path='/recuperar-senha' component={RecuperarSenha} />
          <Route path='/inscricoes' component={Inscricoes} />
        </Switch>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
