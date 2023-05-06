import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';


/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});


describe('Button component', () => {
  test('renders with default style if isSecondary prop is false', () => {
    const { getByTestId } = render(<Button isSecondary={false}>Click me</Button>);
    const button = getByTestId('button');
    expect(button).toHaveStyle(`
      background-color: #EF4444;
      border-radius: 5px;
      font-family: Montserrat;
      font-weight: black;
      font-size: 14px;
      padding: 15px 15px;
      color: #ffff;
    `);
  });

  test('renders with secondary style if isSecondary prop is true', () => {
    const { getByTestId } = render(<Button isSecondary={true}>Click me</Button>);
    const button = getByTestId('button');
    expect(button).toHaveStyle(`
      background-color: #f6e05e;
      border-radius: 50%;
      font-family: Montserrat;
      font-weight: bold;
      font-size: 16px;
      padding: 20px 30px;
      color: #333;
    `);
  });

  test('calls onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock}>Click me</Button>);
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
