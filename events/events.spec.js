const Events = require('./events');

test('Events can be registered when triggered', () => {
  const events = new Events();
  const cb1 = jest.fn();

  events.on('click', cb1);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
});

test('multiple events can be registered when triggered', () => {
  const events = new Events();
  const cb1 = jest.fn();
  const cb2 = jest.fn();

  events.on('click', cb1);
  events.on('click', cb2);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});

test('events can be triggered multiple times', () => {
  const events = new Events();
  const cb1 = jest.fn();
  const cb2 = jest.fn();

  events.on('click', cb1);
  events.trigger('click');
  events.on('click', cb2);
  events.trigger('click');
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(3);
  expect(cb2.mock.calls.length).toBe(2);
})