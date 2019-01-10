import React from 'react';
import styled from 'styled-components';
import { purple300, purple400, blue300, black } from './../../../styled';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 130px;
  width: 258px;
  margin: -5px 0 30px;
  background-color: ${purple300};
  border: 5px solid ${purple400};
  position: absolute;
  top: 0;
  right: -289px;
  font-size: 14px;
  padding: 15px;
`;

const StyledLink = styled(Link)`
  color: ${blue300};
  font-weight: 600;
  margin: 25px 10px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: ${black};
  }
`;

const Logo = () => (
  <Wrapper>
    By: <StyledLink title="Link to github.com" to="https://github.com/n3sta">n3sta</StyledLink>
  </Wrapper>
)

export default Logo