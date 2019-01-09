import React, { Component } from 'react';
import styled from 'styled-components';
import Level from './Level/Level';
import Highscores from './Highscores/Highscores';
import { Link } from "react-router-dom";
import { purple400, blue300, black } from '../../styled';

const Playgame = styled(Link)`
  display: block;
  color: ${black};
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

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const scores = [1000,2000,3000,4000,5000];
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  render() {
    return (
      <>
        <Playgame to="game">Play game</Playgame>
        <Level />
        <Highscores />
      </>
    )
  }
}

export default Homepage;