import test from 'ava';
import factorialize from './factorialize';

test('should return a number', t => {
  t.is(typeof factorialize(5), 'number');
});

test('should return 120', t => {
  t.is(factorialize(5), 120);
});

test('should return 3628800', t => {
  t.is(factorialize(10), 3628800);
});

test('should return 2432902008176640000', t => {
  t.is(factorialize(20), 2432902008176640000);
});

test('should return 1', t => {
  t.is(factorialize(0), 1);
});
