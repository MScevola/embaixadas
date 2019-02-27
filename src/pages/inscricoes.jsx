import React, { Component } from "react";
import styled from 'styled-components';

import banner from '../assets/londres.png';

const Section = styled('section')`
  position: relative;
  display: block;
  text-align: center;
  min-height: 100vh;

  figure{
      position: relative;
      display: block;
      margin: 0;
      max-width: 100vw;
      overflow-x: hidden;

      &:before{
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .3);
          z-index: 2;
      }

      figcaption{
          position: absolute;
          display: block;
          bottom: 0;
          font-size: 2rem;
          color: white;
          z-index: 3;
          text-align: left;
          padding: 10px;
      }
  }
`

class Inscricoes extends Component {
  render() {
    return (
      <Section>
        <figure className="logo">
          <img src={banner} alt="Foto de Londres" title="Embaixadas" />
          <figcaption><h1>TYPE SOMETHING</h1></figcaption>
        </figure>
        <ul className="lista-embaixadas">
            <li>Embaixada Água Verde</li>
            <li>Embaixada Água Verde</li>
            <li>Embaixada Água Verde</li>
            <li>Embaixada Água Verde</li>
        </ul>
      </Section>
    );
  }
}

export default Inscricoes;
