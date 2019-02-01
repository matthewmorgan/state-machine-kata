const STATES = {
    BLUE: "BLUE",
    RED: "RED",
    GREEN: "GREEN"
}

class StateMachine {
  constructor(state=STATES.BLUE) {
    this.state = state;
  }

  read(commands) {
    this.state = STATES.GREEN;
  }
}

export { STATES, StateMachine };
