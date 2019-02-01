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
    if (commands[0] === '0'){
      this.state = STATES.BLUE;
    } else {
      this.state = STATES.GREEN;
    }
  }
}

export { STATES, StateMachine };
