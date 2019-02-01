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
    if (this.state === STATES.RED) {
      this.state = STATES.GREEN;
    }
    else if (this.state === STATES.GREEN && commands[0] === '0') {
      this.state = STATES.RED;
    }
    else if (commands[0] === '1'){
      if (commands[1] === '0'){
        this.state = STATES.RED;
      } else {
        this.state = STATES.GREEN;
      }
    }
    if (commands[4] === '0') {
      this.state = STATES.RED;
      return false;
    }
    return true;
  }
}

export { STATES, StateMachine };
