const STATES = {
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  RED: 'RED',
};

const TRANSITIONS = {
  BLUE:  [STATES.BLUE, STATES.GREEN],
  GREEN: [STATES.RED, STATES.GREEN],
  RED:   [STATES.GREEN, STATES.GREEN]
};

class StateMachine {
  constructor(initialState) {
    this.state = initialState || STATES.BLUE;
  }

  read(commands) {
    commands.forEach(command => {
      this.state = TRANSITIONS[this.state][parseInt(command)];
    });
    return this.state === STATES.GREEN;
  }
}

export { STATES, StateMachine };
