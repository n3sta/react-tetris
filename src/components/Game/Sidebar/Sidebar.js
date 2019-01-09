import React, { Component } from 'react';
import styled from 'styled-components';
import { purple300, purple400 } from '../../../styled';

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
  constructor(props) {
    super(props);
  }

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
          this.drawSquare(X + j + dx, Y + i + dy, next.color);
        }
      }
    }
  }

  cleanPreview() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        this.drawSquare(j,i,EMPTY);
      }
    }
  }

  drawSquare(x,y,color) {
    const SQ = this.props.SQ;
    const brigter = `rgb(${color[0]})`;
    const mostBrighter = `rgb(${color[1]})`;
    const empty = `rgb(${EMPTY[1]})`;
    color = `rgb(${color[2]})`;

    if (color === empty) {
      ctx.clearRect(x*SQ-1,y*SQ-1,SQ+2,SQ+2);
      return;
    }

    ctx.restore();
    // draw inner left-bottom border to imitate 3D
    ctx.beginPath();

    ctx.lineWidth = 2;
    ctx.moveTo(2+x*SQ, 1+y*SQ);
    ctx.lineTo(2+x*SQ, y*SQ+SQ-2);
    ctx.lineTo(2+x*SQ, y*SQ+SQ-2);
    ctx.lineTo(x*SQ+SQ-1, y*SQ+SQ-2);
    ctx.strokeStyle = brigter;
    ctx.stroke();

    // draw inner top-right border to imitate 3D
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(1+x*SQ, 2+y*SQ);
    ctx.lineTo(x*SQ+SQ-2, 2+y*SQ);
    ctx.lineTo(x*SQ+SQ-2, y*SQ+SQ-1);
    ctx.strokeStyle = mostBrighter;
    ctx.stroke();
    ctx.closePath();

    // fill rest of reactangle
    ctx.fillStyle = color;
    ctx.fillRect(3+x*SQ,3+y*SQ,SQ-6,SQ-6);

    // draw outside border
    ctx.strokeStyle = '#000';
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
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