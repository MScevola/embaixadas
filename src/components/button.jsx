import React, { Component } from "react";
import styled from 'styled-components';

const StyledButton = styled('div')`
  position: relative;
  display: block;

  button{
    background: #d61d28;
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    margin: 20px auto;
    width: 90%;
    box-sizing: border-box;
    font-size: 1rem;
    color: white;
    text-align: center;
    text-transform: uppercase;

    &:focus{
      outline: none;
    }
  }
`

class Button extends Component {
  render() {
    return (
        <StyledButton>
          <button className="button" onClick={this.props.onClick}>{this.props.value}</button>
        </StyledButton>
    );
  }
}

export default Button;