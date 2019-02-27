import React, { Component } from "react";
import styled from 'styled-components';
import history from '../history';

import InputText from '../components/inputText';
import Button from '../components/button';

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
  cadastrar(e) {
    e.preventDefault();
    // Função para cadastrar
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
          <InputText type="text" name="nome" placeholder="NOME" />
          <InputText type="text" name="sobrenome" placeholder="SOBRENOME" />
          <InputText type="text" name="email" placeholder="EMAIL" />
          <InputText type="text" name="telefone" placeholder="TELEFONE" />
          <InputText type="password" name="senha" placeholder="SENHA" />
          <InputText type="password" name="confirmarsenha" placeholder="CONFIRMAR SENHA" />
          <Button onClick={this.cadastrar} value="Cadastrar" />
        </form>
      </Section>
    );
  }
}

export default Login;
