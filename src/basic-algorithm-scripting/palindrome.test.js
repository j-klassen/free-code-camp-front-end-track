import test from 'ava';
import palindrome from './palindrome';

test('palindrome("eye") should return a boolean', t => {
  t.is(typeof palindrome('eye'), 'boolean');
});

test('palindrome("eye") should return true', t => {
  t.is(palindrome('eye'), true);
});

test('palindrome("_eye") should return true', t => {
  t.is(palindrome('_eye'), true);
});

test('palindrome("race car") should return true', t => {
  t.is(palindrome('race car'), true);
});

test('palindrome("not a palindrome") should return false', t => {
  t.is(palindrome('not a palindrome'), false);
});

test('palindrome("A man, a plan, a canal. Panama") should return true', t => {
  t.is(palindrome('A man, a plan, a canal. Panama'), true);
});

test('palindrome("never odd or even") should return true', t => {
  t.is(palindrome('never odd or even'), true);
});

test('palindrome("nope") should return false', t => {
  t.is(palindrome('nope'), false);
});

test('palindrome("almostomla") should return false', t => {
  t.is(palindrome('almostomla'), false);
});

test('palindrome("My age is 0, 0 si ega ym.") should return true', t => {
  t.is(palindrome('My age is 0, 0 si ega ym.'), true);
});

test('palindrome("1 eye for of 1 eye.") should return false', t => {
  t.is(palindrome('1 eye for of 1 eye.'), false);
});

test('palindrome("0_0 (: /-\\ :) 0-0") should return true', t => {
  t.is(palindrome('0_0 (: /-\\ :) 0-0'), true);
});

test('palindrome("five|\\_/|four") should return false', t => {
  t.is(palindrome('five|\\_/|four'), false);
});
