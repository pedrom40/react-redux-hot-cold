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

  // on get aural update
  else if (action.type === actions.GET_AURAL_UPDATE) {

    // get current values from state
    const { guesses, feedback } = this.state;

    // If there's not exactly 1 guess, we want to pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {
      auralStatus
    });

  }

  // on make guess
  else if (action.type === actions.MAKE_GUESS) {

    // get the guess from the action value passed in
    const guess = parseInt(action.guess, 10);

    // if guess is not a valid number
    if (isNaN(guess)) {

      return Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      });

    }

    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    }
    else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    }
    else {
      feedback = 'You got it!';
    }

    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });

  }

  return state;

};
