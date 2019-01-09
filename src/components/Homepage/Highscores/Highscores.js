import React from 'react';
import styled from 'styled-components';
import { purple400, purple200, purple100 } from '../../../styled';

const LevelWrapper = styled.div`
  border: 5px solid ${purple400};
  padding: 5px;
  margin: 15px 15px 15px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 10px 0;
  font-weight: 600;
`;

const Item = styled.li`
  list-style-type: none;
  text-align: right;
  margin: 3px 0;
  padding: 8px 5px 5px;
  font-size: 16px;
  &:nth-child(even) {
    background-color: ${purple200};
  }
  &:nth-child(odd) {
    background-color: ${purple100};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const list = JSON.parse(localStorage.getItem('scores')).sort((a,b) => b-a).slice(0,6);

const Highscores = () => (
  <LevelWrapper>
    <Title>High scores</Title>
    <Ul>
      {list.map(x => <Item key={x}>{x}</Item>)}
    </Ul>
  </LevelWrapper>
)

export default Highscores;