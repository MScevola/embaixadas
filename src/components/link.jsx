import React, { Component } from "react";
import styled from 'styled-components';

const StyledLink = styled('a')`
  position: relative;
  display: block;
  text-align: center;
  font-size: .9rem;
  font-weight: 500;
  color: inherit;
  margin: 5px 0 10px;
`

class Link extends Component {
  render() {
    return (
        <StyledLink href={this.props.href}>
            {this.props.value}
        </StyledLink>
    );
  }
}

export default Link;