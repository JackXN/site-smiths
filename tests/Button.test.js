
import { render } from '@testing-library/react';
import Button from '../src/components/CustomButton';
import {describe,expect,it} from 'vitest';

describe('Button', () => {
  it('renders with primary style when isSecondary prop is false', () => {
    expect(Button).toHaveStyle(`
      background-color: #EF4444;
      border-radius: 5px;
      font-family: Montserrat;
      font-weight: bold;
      font-size: 14px;
      padding: 15px;
      color: #fff;
    `);
  });

  it('renders with secondary style when isSecondary prop is true', () => {



    expect(Button).toHaveStyle(`
      background-color: #333;
      border-radius: 8px;
      font-family: Arial;
      font-weight: normal;
      font-size: 12px;
      padding: 10px;
      color: #fff;
    `);
  });
});