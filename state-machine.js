const STATES = {
    BLUE: "BLUE",
    RED: "RED"
}

class StateMachine {
  constructor(state=undefined) {
    this.state = state? state : STATES.BLUE;
  }

  read(commands) {

  }
}

export { STATES, StateMachine };
