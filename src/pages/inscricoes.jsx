import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

import banner from '../assets/londres.png';
import icon from '../assets/icon.png';

const Section = styled('section')`
  position: relative;
  display: block;
  text-align: center;
  min-height: 100vh;

  .banner{
      position: relative;
      display: block;
      margin: 0;
      padding: 0;
      width: 100vw;
      max-width: 380px;
      overflow-x: hidden;
      box-sizing: border-box;

      &:before{
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .3);
          z-index: 2;
      }

      .title{
          position: absolute;
          display: block;
          bottom: 0;
          font-size: 2.5rem;
          color: white;
          z-index: 3;
          text-align: left;
          padding: 10px;
          max-width: 100%;
          box-sizing: border-box;
      }

      img{
        position: relative;
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
      }
  }

  .lista-embaixadas{
    position: relative;
    display: block;
    background: white;
    margin: 0;
    padding: 0 20px;
    list-style: none;
    max-width: 100%;

    li{
      background: white;
      padding: 20px 20px 20px 70px;
      border-bottom: #ccc dotted 2px;
      text-align: left;
      background: url(${icon}) no-repeat;
      background-position: left center;
      background-size: 50px;

      &:last-of-type{
        border-bottom: none;
      }

      span{
        display: block;

        &.name{
          text-transform: uppercase;
          color: #020425;
          font-weight: 700;
        }

        &.endereco{
          font-size: .8rem;
          padding: 4px 0;
        }

        &.inscritos{
          font-size: .8rem;
          color: #CCC;
        }
      }
    }
  }
`

class Inscricoes extends Component {

  render() {
    return (
      <Section>
        <div className="banner">
          <img src={banner} alt="Foto de Londres" title="Embaixadas" />
          <h1 className="title">TYPE SOMETHING</h1>
        </div>
        <ul className="lista-embaixadas">
          {this.props.embaixadas.map(embaixada => (
            <li key={embaixada.id} className={embaixada.categoria}>
              <span className="name">{embaixada.nome}</span>
              <span className="endereco">{embaixada.endereco}</span>
              <span className="inscritos">{embaixada.incricoes} Inscrições</span>
            </li>
            )
          )}
        </ul>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return { embaixadas: state.Embaixadas };
}

export default connect(mapStateToProps)(Inscricoes);
