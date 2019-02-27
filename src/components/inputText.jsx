import React, { Component } from "react";
import styled from 'styled-components';

const StyledInput = styled('div')`
  position: relative;
  display: block;

  label{
    display: none;
  }

  input{
    background: none;
    border: none;
    border-bottom: #666 solid thin;
    padding: 16px 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    color: inherit;
    margin-bottom: 16px;

    &:focus{
      outline: none;
    }
  }
`

class InputText extends Component {
  render() {
    return (
        <StyledInput>
          <label htmlFor={this.props.name}>{this.props.placeholder}</label>
          <input type={this.props.type} name={this.props.name} id={this.props.name} placeholder={this.props.placeholder} />
        </StyledInput>
    );
  }
}

export default InputText;