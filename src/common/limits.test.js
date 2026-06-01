import { test, expect } from 'vitest';
import { setLimit, MAX_LIMIT, DEFAULT_LIMIT } from './limits.js';

test('returns DEFAULT_LIMIT when input is undefined', () => {
  expect(setLimit(undefined)).toBe(DEFAULT_LIMIT);
});

test('returns DEFAULT_LIMIT when input is null', () => {
  expect(setLimit(null)).toBe(DEFAULT_LIMIT);
});

test('returns DEFAULT_LIMIT when input is a non-numeric string', () => {
  expect(setLimit('abc')).toBe(DEFAULT_LIMIT);
});

test('returns DEFAULT_LIMIT when input is an empty string', () => {
  expect(setLimit('')).toBe(DEFAULT_LIMIT);
});

test('returns the parsed integer when within bounds', () => {
  expect(setLimit('50')).toBe(50);
  expect(setLimit(50)).toBe(50);
});

test('accepts the lower bound of 1', () => {
  expect(setLimit('-1')).toBe(1);
});

test('accepts the upper bound of MAX_LIMIT', () => {
  expect(setLimit(String(MAX_LIMIT + 1))).toBe(MAX_LIMIT);
});

test('truncates non-integer numbers via parseInt', () => {
  expect(setLimit('42.9')).toBe(42);
});

test('returns DEFAULT_LIMIT for mixed alphanumeric input', () => {
  expect(setLimit('25abc')).toBe(DEFAULT_LIMIT);
});
