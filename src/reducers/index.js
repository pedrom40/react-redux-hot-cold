import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {

  // on restart game
  if (action.type === actions.RESTART_GAME) {

    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    });

  }

  return state;

};
