import React, { Component } from 'react';
import styled from 'styled-components';
import { purple400, purple200, purple100 } from '../../../styled';
import { getAll } from './../../../api';

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

const Empty = styled.small`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin: 45px 0;
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

class Highscores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  async componentDidMount() {
    this.getHighscores();
  }

  async getHighscores() {
    const result = await getAll();
    this.setState({
      list: result.sort((a,b) => b.value - a.value).slice(0,5)
    })
  }

  render() {
    return (
      <LevelWrapper>
        <Title>High scores</Title>
        {!this.state.list.length && <Empty>No scores.</Empty>}
        <Ul>
          {this.state.list.map(x => <Item key={x.id}>{x.value}</Item>)}
        </Ul>
      </LevelWrapper>
    )
  }
}

export default Highscores;