import React from 'react';
import { ButtonProps as ReactAriaButtonProps } from 'react-aria-components';
import { StyledVariantProps } from '#styled-system/types';
import { StyledButton } from './styles';

type ButtonProps = { children?: React.ReactNode } & StyledVariantProps<
  typeof StyledButton
> &
  ReactAriaButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
