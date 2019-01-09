export function randomColor() {
  const colors = [
    ['127,10,0', '255,26,0', '191,14,0'], ['0,8,127','0,13,191','0,17,255'], ['26,127,0','53,255,0','40,191,0'], ['127,109,0','191,164,0','255,218,0'],
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function randomPiece(PIECES) {
  return PIECES[Math.floor(Math.random() * PIECES.length)];
}