import { STATES, StateMachine } from './state-machine';


describe('StateMachine business class can', () => {
  test('return an instance of the StateMachine class', () => {
    const machine = new StateMachine();
    expect(machine.constructor.name)
      .toEqual('StateMachine');
  });
  test('state machine accepts inputs', () => {
    const machine = new StateMachine();
    const inputs = ['1'];
    expect(() => machine.read(inputs))
      .not
      .toThrow();
  });
  test('state machine accepts multiple inputs', () => {
    const machine = new StateMachine();
    const inputs = ['1', '0'];
    expect(() => machine.read(inputs))
      .not
      .toThrow();
  });

  test('can read the state itself from the machine', () => {
    const machine = new StateMachine();
    expect(machine.state)
      .toBe(STATES.BLUE);
  });
});

describe('machines can be created with any desired initial state', () => {
  test('can create a machine with a default red state', () => {
    const machine = new StateMachine(STATES.RED);
    expect(machine.state)
      .toBe(STATES.RED);
  });
  test('can create a machine with a default blue state', () => {
    const machine = new StateMachine(STATES.BLUE);
    expect(machine.state)
      .toBe(STATES.BLUE);
  });
  test('can create a machine with a default green state', () => {
    const machine = new StateMachine(STATES.GREEN);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });
});

describe('state machine can transition', () => {
  let machine;
  beforeEach(() => {
    machine = new StateMachine();
  });

  test('reading 1 when in blue state changes state to green', () => {
    machine.read(['1']);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });
});

describe('test transitions from blue state', () => {
  let machine;
  beforeEach(() => {
    machine = new StateMachine(STATES.BLUE);
  });

  test('reading 1 causes blue -> green transition', () => {
    machine.read(['1']);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });

  test('reading 0 causes blue -> blue transition', () => {
    machine.read(['0']);
    expect(machine.state)
      .toBe(STATES.BLUE);
  });
});

describe('test transitions from red state', () => {
  let machine;
  beforeEach(() => {
    machine = new StateMachine(STATES.RED);
  });

  test('reading 1 causes red -> green transition', () => {
    machine.read(['1']);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });

  test('reading 0 causes red -> green transition', () => {
    machine.read(['0']);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });
});

describe('test transitions from green state', () => {
  let machine;
  beforeEach(() => {
    machine = new StateMachine(STATES.GREEN);
  });

  xtest('reading 1 causes green -> green transition', () => {
    machine.read(['1']);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });

  xtest('reading 0 causes green -> red transition', () => {
    machine.read(['0']);
    expect(machine.state)
      .toBe(STATES.RED);
  });
});

describe('sequences of commands give expected results', () => {
  let machine;
  beforeEach(() => {
    machine = new StateMachine(STATES.GREEN);
  });

  xtest('two ones ends up at green, or accepted', () => {
    const accepted = machine.read(['1', '1']);
    expect(accepted)
      .toBe(true);
    expect(machine.state)
      .toBe(STATES.GREEN);
  });

  xtest('10010 end up in red state', () => {
    const accepted = machine.read(['1', '0', '0', '1', '0']);
    expect(accepted)
      .toBe(false);
    expect(machine.state)
      .toBe(STATES.RED);
  });

});

