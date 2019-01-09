import React from 'react';
import styled from 'styled-components';
import { purple400, blue300 } from '../../../styled';
import { connect } from 'react-redux';
import { incrementLevel, decrementLevel } from "./../../../redux/actions";

const LevelWrapper = styled.div`
  display: flex;;
  justify-content: space-between;
  border: 5px solid ${purple400};
  margin: 15px 15px 0;
  line-height: 43px;
  font-size: 16px;
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  padding: 15px;
  color: ${purple400};
  &:hover {
    background-color: ${blue300};
  }
`;

const Level = ({ level, incrementLevel, decrementLevel }) => (
  <LevelWrapper>
    <Btn onClick={decrementLevel}>-</Btn>
    lvl: {level}
    <Btn onClick={incrementLevel}>+</Btn>
  </LevelWrapper>
)

const mapStateToProps = state => {
  return { level: state.game.level };
};

export default connect(
  mapStateToProps,
  { incrementLevel, decrementLevel }
)(Level);