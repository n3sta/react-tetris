import React, { Component } from 'react';
import styled from 'styled-components';
import Level from './Level/Level';
import Highscores from './Highscores/Highscores';
import Info from './Info/Info';
import Logo from './Logo/Logo';
import { Link } from "react-router-dom";
import { purple400, blue300, black } from '../../styled';

const Wrapper = styled.div`
  position: relative;
`;

const Playgame = styled(Link)`
  display: block;
  color: ${black};
  font-weight: 600;
  border: 5px solid ${purple400};
  padding: 15px;
  margin: 25px 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    background-color: ${blue300};
  }
`;

const ShowInfo = styled.button`
  font-weight: 600;
  border: 5px solid ${purple400};
  padding: 15px;
  margin: 15px;
  width: calc(100% - 30px);
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;
  background-color: transparent;
  color: ${purple400};
  &:hover {
    background-color: ${blue300};
  }
`;

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false
    }
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.setState(state => state.info = !state.info);
  }

  render() {
    return (
      <>
        <Wrapper>
          <Playgame to="game">Play game</Playgame>
          <Level />
          <Highscores />
          <ShowInfo onClick={this.toggleInfo}>Control keys</ShowInfo>
          {this.state.info && <Info toggleInfo={this.toggleInfo}/>}
        </Wrapper>
        <Logo />
      </>
    )
  }
}

export default Homepage;