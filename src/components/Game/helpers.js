const SQ = 30;
const EMPTY = ['216,235,255','216,235,255','216,235,255'];

export function randomColor() {
  const colors = [
    ['127,10,0', '255,26,0', '191,14,0'], ['0,8,127','0,13,191','0,17,255'], ['26,127,0','53,255,0','40,191,0'], ['127,109,0','191,164,0','255,218,0'],
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function randomPiece(PIECES) {
  return PIECES[Math.floor(Math.random() * PIECES.length)];
}

export function drawSquare(ctx, x,y,color) {
  const brigter = `rgb(${color[0]})`;
  const mostBrighter = `rgb(${color[1]})`;
  const empty = `rgb(${EMPTY[1]})`;
  color = `rgb(${color[2]})`;

  if (color === empty) {
    ctx.clearRect(x*SQ,y*SQ,SQ,SQ);
    return false;
  }

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
  ctx.strokeRect(1+x*SQ,1+y*SQ,SQ-2,SQ-2);
  return ctx;
}