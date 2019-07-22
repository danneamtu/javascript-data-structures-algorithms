const Events = require('./events');

test('Events can be registered when triggered', () => {
  const events = new Events();
  const cb1 = jest.fn();

  events.on('click', cb1);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
})