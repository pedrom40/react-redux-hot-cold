export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
  type: RESTART_GAME,
  correctAnswer
});

export const GET_AURAL_UPDATE = 'GET_AURAL_UPDATE';
export const getAuralUpdate = () => ({
  type: GET_AURAL_UPDATE
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});
