import test from 'ava';
import reverseString from './reverse-a-string';

test('should handle default string', t => {
  t.is(reverseString(), '');
});

test('should return a string', t => {
  t.is(typeof reverseString('hello'), 'string');
});

test('should return "olleh"', t => {
  t.is(reverseString('hello'), 'olleh');
});

test('should return "ydwoH"', t => {
  t.is(reverseString('Howdy'), 'ydwoH');
});

test('should return "htraE morf sgniteerG"', t => {
  t.is(reverseString('Greetings from Earth'), 'htraE morf sgniteerG');
});

test('should throw when given an invalid argument', t => {
  t.throws(() => reverseString(123));
  t.throws(() => reverseString({}));
});
