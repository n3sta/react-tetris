import React, { Component } from 'react';
import styled from 'styled-components';
import { purple300, purple400 } from '../../../styled';
import { drawSquare } from './../helpers';

const Preview = styled.div`
  height: 130px;
  width: 253px;
  margin: -5px 0 30px;
  background-color: ${purple300};
  border: 5px solid ${purple400};
`;

const Wrapper = styled.div`
  width: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  display: block;
  color: ${purple400};
  width: 100%;
  background-color: ${purple300};
  border: 5px solid ${purple400};
  padding: 15px;
  text-transform: uppercase;
  font-size: 16px;
`;

const BlockWTB = styled(Block)`
  border-top: none;
`;

const EMPTY = ['216,235,255','216,235,255','216,235,255'];
const X = 2;
const Y = 1;
let cvs = null;
let ctx = null;

class Sidebar extends Component {
  componentDidMount() {
    cvs = document.getElementById("preview");
    ctx = cvs.getContext("2d");
  }

  componentWillReceiveProps(newProps) {
    if (this.props.next.shape !== null && newProps !== this.pros) {
      this.cleanPreview();
      this.drawPreview();
    };
  }

  drawPreview() {
    const next = this.props.next;
    const nextSpape = next.active;
    for (let i = 0; i < nextSpape.length; i++) {
      for (let j = 0; j < nextSpape.length; j++) {
        if (nextSpape[i][j]) {
          const dy = nextSpape.length === 4 ? -1 : 0;
          const dx = nextSpape.length === 4 ? 0 : 0.5;
          drawSquare(ctx,X + j + dx, Y + i + dy, next.color);
        }
      }
    }
  }

  cleanPreview() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        drawSquare(ctx,j,i,EMPTY);
      }
    }
  }

  render() {
    const { level, score, lines } = this.props;
    return (
      <Wrapper>
        <Preview>
          <canvas width="243" height="100" id="preview"></canvas>
        </Preview>
        <Block>Level {level}</Block>
        <BlockWTB>Score {score}</BlockWTB>
        <BlockWTB>Lines {lines}</BlockWTB>
      </Wrapper>
    )
  }
}

export default Sidebar;