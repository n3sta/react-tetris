import React from 'react';
import styled from 'styled-components';
import { purple300, purple400, blue300, black } from './../../../styled';

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

const Done = styled.button`
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

const Table = styled.table`
  width: 100%;
  margin-top: 25px;
`;

const Tr = styled.tr`
  padding: 3px;
  & td:first-child {
    font-weight: 600;
    text-align: right;
  }
  & td:last-child {
    text-align: left;
  }
`;

const Td = styled.td`
  padding: 6px 0;
  font-size: 14px;
  font-weight: 400;
  font-family: 'arial';

`;

const Info = ({ toggleInfo }) => (
  <Modal>
    Control keys
    <Table>
      <tbody>
        <Tr>
          <Td>Left arrow</Td>
          <Td>-</Td>
          <Td>Move left</Td>
        </Tr>
        <Tr>
          <Td>Right arrow</Td>
          <Td>-</Td>
          <Td>Move right</Td>
        </Tr>
        <Tr>
          <Td>Up arrow</Td>
          <Td>-</Td>
          <Td>Rotate</Td>
        </Tr>
        <Tr>
          <Td>Down arrow</Td>
          <Td>-</Td>
          <Td>Soft drop</Td>
        </Tr>
        <Tr>
          <Td>ESC</Td>
          <Td>-</Td>
          <Td>Pause (toggle)</Td>
        </Tr>
      </tbody>
    </Table>
    <Done onClick={toggleInfo}>Done</Done>
  </Modal>
)

export default Info;