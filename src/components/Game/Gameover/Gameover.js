import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { purple300, purple400, blue300, black } from '../../../styled';
import Highscores from "./../../Homepage/Highscores/Highscores";

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  margin: 30px 0;
  font-weight: 600;
  color: ${purple400};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 15px;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100px;
  background-color: ${purple300};
  border: 5px solid ${purple400};
  text-transform: uppercase;
  font-size: 30px;
  color: ${purple400};
  &:hover {
    background-color: ${blue300};
  }
`;

const ButtonLarge = styled(Button)`
  width: 125px;
  height: 120px;
  color: ${black};
  font-size: 50px;
`;

const Gameover = () => (
  <>
    <Title>Game over</Title>
    <Highscores />
    <ButtonsWrapper>
      <Button title="go to homepage" to="/"><span className="fas fa-home" aria-hidden="true"></span></Button>
      <ButtonLarge title="repeat game" to="game"><span className="fas fa-redo" aria-hidden="true"></span></ButtonLarge>
    </ButtonsWrapper>
  </>
)

export default Gameover;