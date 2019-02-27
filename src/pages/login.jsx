import React, { Component } from "react";
import styled from 'styled-components';
import history from '../history';

import InputText from '../components/inputText';
import Button from '../components/button';
import Link from '../components/link';

import logo from '../assets/logo.png';

const Section = styled('section')`
  position: relative;
  display: block;
  text-align: center;

  .logo{
    position: relative;
    display: block;
    padding: 14px 20px;
    box-sizing: border-box;
  }
`

class Login extends Component {
  validarLogin(e) {
    e.preventDefault();
    // Função para validar login
    history.push('/inscricoes');
  }

  render() {
    return (
      <Section>
        <figure className="logo">
          <img src={logo} alt="Logotipo App Embaixadas" title="Embaixadas" />
          <figcaption>Embaixadas | GV</figcaption>
        </figure>
        <form>
          <InputText type="text" name="email" placeholder="EMAIL" />
          <InputText type="password" name="senha" placeholder="SENHA" />
          <Button onClick={this.validarLogin} value="Entrar" />
        </form>
        <Link href="/cadastrar" value="Não tenho cadastro" />
        <Link href="/recuperar-senha" value="Esqueci minha senha" />
      </Section>
    );
  }
}

export default Login;
