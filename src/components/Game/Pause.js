import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { purple300, purple400, blue300, black } from './../../styled';
import { togglePause } from "./../../redux/actions";
import { Link } from "react-router-dom";

const Modal = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-color: ${purple300};
  padding: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const Resume = styled.button`
  width: 100%;
  background-color: transparent;
  padding: 15px;
  margin-top: 30px;
  color: ${purple400};
  color: ${black};
  border: 5px solid ${purple400};
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background-color: ${blue300};
  }
`;

const Quit = styled(Link)`
  display: block;
  margin: 30px;
  color: ${purple400};
  padding: 15px;
  margin-top: 30px;
  color: ${purple400};
  border: 5px solid ${purple400};
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background-color: ${blue300};
  }
`;

const Pause = ({ togglePause }) => (
  <Modal>
    Paused
    <Resume onClick={togglePause}>Resume</Resume>
    <Quit to="/">Quit</Quit>
  </Modal>
)

export default connect(
  null,
  { togglePause }
)(Pause);