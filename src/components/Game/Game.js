import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import Pause from './Pause/Pause';
import { add } from './../../api';
import { connect } from 'react-redux';
import { PIECES } from './pieces';
import { randomColor, randomPiece, drawSquare } from './helpers';
import { togglePause } from "./../../redux/actions";
import lockmp3 from './../../media/lock.mp3';
import linemp3 from './../../media/line.mp3';
import gameovermp3 from './../../media/gameover.mp3';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
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

class Game extends Component {
  static foo = 'bar';
  constructor(props) {
    super(props);
    this.state = {
      gameover: false,
      board: [],
      level: this.props.level,
      score: 0,
      lines: 0,
      frequency: 500 - (this.props.level * 40),
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
    window.removeEventListener('keydown', this.control);
    window.removeEventListener('keyup', this.clearDirectionInterval);
    interval = null;
    directionInterval.left.run = false;
    directionInterval.right.run = false;
    directionInterval.down.run = false;
    clearInterval(directionInterval.right.interval);
    clearInterval(directionInterval.left.interval);
    clearInterval(directionInterval.down.interval);
  }

  control(event){
    if (this.state.gameover) return false;
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
      case 27: {
        this.props.togglePause();
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
        drawSquare(ctx,j,i,EMPTY);
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
    this.setState({piece,nextPiece,score: this.state.score + this.state.level}, () => {
      this.fill(piece.color);
      if (!interval) this.start();
    });
  }

  fill(color) {
    const piece = this.state.piece;
    const { active } = piece;
    Array.from({length: active.length}, (v,k) => k).forEach(i => {
      Array.from({length: active.length}, (v,k) => k).forEach(j => {
        if (active[i][j]) {
          drawSquare(ctx, piece.x + j, piece.y + i, color);
        }
      })
    })
  }

  moveRight() {
    if (directionInterval.right.run === true || this.state.gameover) return false;
    directionInterval.right.run = true;
    const piece = this.state.piece;
    directionInterval.right.interval = setInterval(() => {
      if (!this.colision(1,0,piece.active)) {
        this.fill(EMPTY);
        this.setState(state => state.piece.x++, () => {
          this.fill(piece.color);
        })
      }
    }, 75);
  }

  moveLeft() {
    if (directionInterval.left.run === true || this.state.gameover) return false;
    directionInterval.left.run = true;
    const piece = this.state.piece;
    directionInterval.left.interval = setInterval(() => {
      if (!this.colision(-1,0,piece.active)) {
        this.fill(EMPTY);
        this.setState(state => state.piece.x--, () => {
          this.fill(piece.color);
        })
      }
    }, 75);
  }

  moveDown() {
    if (directionInterval.down.run === true || this.state.gameover) return false;
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
      }
    }, 75);
  }

  colision(x,y,active) {
    if (this.state.gameover) return false;
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
        this.fill(piece.color);
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
    clearInterval(interval);

    this.setState({gameover: true}, () => {
      gameover.play();
      add(this.state.score);
      this.props.history.push(`/gameover`);
    })
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

        // remove full line from board
        Array.from({length: COL}, (v,k) => k).forEach(x => {
          drawSquare(ctx,x,i,EMPTY);
          this.setState(state => {
            state.board[i][x] = EMPTY;
          })
        })
      }
    }
    // move down all reactangles above removed lines based on 'lines'
    if (lines > 0) {
      for (let p = lineNumber; p >= 0; p--) {
        for (let s = 0; s < COL; s++) {
          for (let t = 1; t <= lines; t++) {
            const color = board[p-t] ? board[p-t][s] : EMPTY;
            drawSquare(ctx,s,p,color);
            this.setState(state => {
              state.board[p][s] = color;
            })
          }
        }
      }
      line.play();
      const newLines = this.state.lines + lines;
      let newLevel = this.state.level;
      if (newLines/(newLevel*10) >= 1) newLevel++;
      this.setState(state => {
        state.score = state.score + (100+state.level) * Math.pow(lines,2);
        state.lines = state.lines + lines;
        state.level = newLevel;
      });
    }
    this.createShape();
  }

  start() {
    interval = setInterval(() => {
      if (this.props.pause) return false;
      if (!this.colision(0,1,this.state.piece.active)) {
        this.fill(EMPTY);
        this.setState(state => state.piece.y++, () => {
          this.fill(this.state.piece.color);
          clearInterval(interval);
          this.start();
        });
      } else {
        this.lock();
      }
    }, this.state.frequency)
  }

  render() {
    const { score, level, lines, nextPiece, pause } = this.state;
    return (
      <Wrapper>
        <canvas id="tetris" width="310" height="600"></canvas>
        <Sidebar score={score} level={level} lines={lines} next={nextPiece} SQ={SQ} />
        {this.props.pause === true && <Pause></Pause>}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    level: state.game.level,
    pause: state.game.pause
  }
}

export default connect(
  mapStateToProps,
  { togglePause }
)(Game);