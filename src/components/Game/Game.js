import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import { connect } from 'react-redux';
import { Z, S, T, O, L, I, J} from './pieces';
import { randomColor, randomPiece } from './helpers';
import lockmp3 from './../../media/lock.mp3';
import linemp3 from './../../media/line.mp3';
import gameovermp3 from './../../media/gameover.mp3';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const lock = new Audio(lockmp3);
const gameover = new Audio(gameovermp3);
const line = new Audio(linemp3);
const ROW = 20;
const COL = 10;
const SQ = 30;
const EMPTY = ['216,235,255','216,235,255','216,235,255'];
let cvs = null;
let ctx = null;
let interval = null;
let directionInterval = {
  'left': {
    run: false,
    interval: null
  },
  'right': {
    run: false,
    interval: null
  },
  'down': {
    run: false,
    interval: null
  }
};
const PIECES = [
  Z,S,T,O,L,I,J,
  Z,S,T,O,L,I,J,
  Z,S,T,O,L,I,J,
  Z,S,T,O,L,I,J
];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameover: false,
      board: [],
      level: this.props.level,
      score: 0,
      lines: 0,
      frequency: 500 - (this.props.level * 25),
      nextPiece: {
        shape: null,
        color: null
      },
      piece: {
        shape: [],
        color: null,
        position: null,
        active: null,
        x: null,
        y: null
      }
    }
    this.createShape = this.createShape.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.drawBoard = this.drawBoard.bind(this);
    this.checkRow = this.checkRow.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.control.bind(this), true);
    window.addEventListener("keyup", this.clearDirectionInterval.bind(this));
    this.drawBoard();
    this.createShape();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.control.bind(this));
    window.removeEventListener('keyup', this.clearDirectionInterval.bind(this));
  }

  control(event){
    switch (event.keyCode) {
      case 37: {
        directionInterval.right.run = false;
        directionInterval.down.run = false;
        clearInterval(directionInterval.right.interval);
        clearInterval(directionInterval.down.interval);
        this.moveLeft();
        break;
      };
      case 38: this.rotate(); break;
      case 39: {
        directionInterval.left.run = false;
        directionInterval.down.run = false;
        clearInterval(directionInterval.left.interval);
        clearInterval(directionInterval.down.interval);
        this.moveRight();
        break;
      };
      case 40: {
        directionInterval.left.run = false;
        directionInterval.right.run = false;
        clearInterval(directionInterval.left.interval);
        clearInterval(directionInterval.right.interval);
        this.moveDown();
        break;
      }
      default: break;
    }
  }

  clearDirectionInterval(event) {
    switch (event.keyCode) {
      case 37: {
        directionInterval.left.run = false;
        clearInterval(directionInterval.left.interval);
        break;
      };
      case 39: {
        directionInterval.right.run = false;
        clearInterval(directionInterval.right.interval);
        break;
      };
      case 40: {
        directionInterval.down.run = false;
        clearInterval(directionInterval.down.interval);
        break;
      }
      default: break;
    }
  }

  drawBoard() {
    const board = [];
    cvs = document.getElementById("tetris");
    ctx = cvs.getContext("2d");
    for (let i = 0; i < ROW; i++) {
      board[i] = [];
      for (let j = 0; j < COL; j++) {
        board[i][j] = EMPTY;
        this.drawSquare(j,i,EMPTY);
      }
    }
    this.setState({board});
  }

  createShape() {
    const shape = randomPiece(PIECES);
    const nextShape = randomPiece(PIECES);
    const piece = {
      shape,
      color: randomColor(),
      active: shape[0],
      position: 0,
      x: 3,
      y: -2
    };
    if (this.state.nextPiece.shape) {
      piece.active = this.state.nextPiece.active;
      piece.color = this.state.nextPiece.color;
      piece.shape = this.state.nextPiece.shape;
    }

    const nextPiece = {
      active: nextShape[0],
      shape: nextShape,
      color: randomColor(),
    };
    this.setState({
      piece,
      nextPiece,
      score: this.state.score + 1
    }, () => {
      this.fill(piece.color);
      if (!interval) this.start();
    });
  }

  drawSquare(x,y,color) {
    const brigter = `rgb(${color[0]})`;
    const mostBrighter = `rgb(${color[1]})`;
    const empty = `rgb(${EMPTY[1]})`;
    color = `rgb(${color[2]})`;

    if (color === empty) {
      ctx.clearRect(x*SQ-1,y*SQ-1,SQ+2,SQ+2);
      return false;
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

  fill(color) {
    const piece = this.state.piece;
    const { active } = piece;
    for (let i = 0; i < active.length; i++) {
      for (let j = 0; j < active.length; j++) {
        if (active[i][j]) {
          this.drawSquare(piece.x + j, piece.y + i, color);
        }
      }
    }
  }

  moveRight() {
    if (directionInterval.right.run === true) return false;
    directionInterval.right.run = true;
    directionInterval.right.interval = setInterval(() => {
      if (!this.colision(1,0,this.state.piece.active)) {
        this.fill(EMPTY);
        this.setState(state => state.piece.x++, () => {
          this.fill(this.state.piece.color);
        })
      }
    }, 75);
  }

  moveLeft() {
    if (directionInterval.left.run === true) return false;
    directionInterval.left.run = true;
    directionInterval.left.interval = setInterval(() => {
      if (!this.colision(-1,0,this.state.piece.active)) {
        this.fill(EMPTY);
        this.setState(state => state.piece.x--, () => {
          this.fill(this.state.piece.color);
        })
      }
    }, 75);
  }

  moveDown() {
    if (directionInterval.down.run === true) return false;
    directionInterval.down.run = true;
    directionInterval.down.interval = setInterval(() => {
      if (!this.colision(0,1,this.state.piece.active)) {
          this.fill(EMPTY);
          this.setState(state => state.piece.y++, () => {
            this.fill(this.state.piece.color);
            clearInterval(interval);
            this.start();
        });
      } else {
        this.lock();
        if (!this.state.gameover) this.createShape();
      }
    }, 75);
  }

  colision(x,y,active) {
    const piece = this.state.piece;
    for (let i = 0; i < active.length; i++) {
      for (let j = 0; j < active.length; j++) {
        const newX = piece.x + j + x;
        const newY = piece.y + i + y;

        if (!active[i][j] || newY < 0) continue;
        if (newX < 0 || newX >= COL || newY >= ROW) return true;
        if (this.state.board[newY][newX][0] !== EMPTY[0]) return true;
      }
    }
    return false;
  }

  rotate() {
    const piece = this.state.piece;
    const next = piece.position === piece.shape.length-1 ? 0 : piece.position + 1;
    if (!this.colision(0,0,piece.shape[next])) {
      this.fill(EMPTY);
      this.setState(state => {
        state.piece.active = state.piece.shape[next];
        state.piece.position = next;
      }, () => {
        this.fill(this.state.piece.color);
      })
    }
  }

  lock() {
    const piece = this.state.piece;
    const active = piece.active;
    for (let i = 0; i < active.length; i++) {
      for (let j = 0; j < active.length; j++) {
        if (!active[i][j]) continue;

        if (this.state.piece.y + i < 0) {
          i = active.length;
          this.gameOver();
          break;
        }

        this.setState(state => {
          state.board[this.state.piece.y + i][this.state.piece.x + j] = state.piece.color;
        }, () => lock.play());
      }
    }
    this.checkRow();
  }

  gameOver() {
    gameover.play();
    this.setState({gameover: true}, () => {
      const scores = JSON.parse(localStorage.getItem('scores'));
      scores.push(this.state.score);
      localStorage.setItem('scores', JSON.stringify(scores));
      this.props.history.push(`/gameover`);
    });
  }

  checkRow() {
    const board = this.state.board;
    let lines = 0;
    let lineNumber = 0;
    for (let i = 0; i < ROW; i++) {
      const line = Array.from({length: COL}, (v,k) => k).filter(x => board[i][x][0] !== EMPTY[0]).length;
      if (line === COL) {
        lines++;
        lineNumber = i;
        // remove line from board
        for (let x = 0; x < COL; x++) {
          this.drawSquare(x,i,EMPTY);
          this.setState(state => {
            state.board[i][x] = EMPTY;
          })
        }
      }
    }
    // move down all reactangles above removed lines based on 'lines'
    if (lines > 0) {
      for (let p = lineNumber; p >= 0; p--) {
        for (let s = 0; s < COL; s++) {
          for (let t = 1; t <= lines; t++) {
            const color = board[p-t] ? board[p-t][s] : EMPTY;
            this.drawSquare(s,p,color);
            this.setState(state => {
              state.board[p][s] = color;
            })
          }
        }
      }
      line.play();
      this.setState(state => {
        state.score = state.score + 100 * Math.pow(lines,2);
        state.lines = state.lines + lines;
      });
    }
  }

  start() {
    interval = setInterval(() => {
      if (!this.colision(0,1,this.state.piece.active)) {
        this.fill(EMPTY);
        this.setState(state => state.piece.y++, () => {
          this.fill(this.state.piece.color);
          clearInterval(interval);
          this.start();
        });
      } else {
        this.lock();
        if (!this.state.gameover) this.createShape();
      }
    }, this.state.frequency)
  }

  render() {
    const { score, level, lines, nextPiece } = this.state;
    return (
      <Wrapper>
        <canvas id="tetris" width="310" height="600"></canvas>
        <Sidebar score={score} level={level} lines={lines} next={nextPiece} SQ={SQ} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return { level: state.game.level }
}

export default connect(
  mapStateToProps,
  null
)(Game);