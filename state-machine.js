const STATES = {
    BLUE: "BLUE",
    RED: "RED"
}

class StateMachine {
  constructor(state=STATES.BLUE) {
    this.state = state;
  }

  read(commands) {

  }
}

export { STATES, StateMachine };
