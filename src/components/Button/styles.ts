import { cva } from '#styled-system/css';
import { styled } from '#styled-system/jsx';
import { Button } from 'react-aria-components';

const buttonStyle = cva({
  base: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  variants: {
    variant: {
      primary: {
        colorPalette: 'purple',
        bg: 'colorPalette.200',
        color: 'colorPalette.950',
        _hover: { bg: 'colorPalette.400' },
        _pressed: { bg: 'colorPalette.800', color: 'colorPalette.50' },
        _disabled: { bg: 'colorPalette.50' },
      },
      secondary: {
        colorPalette: 'pink',
        bg: 'colorPalette.200',
        color: 'colorPalette.950',
        _hover: { bg: 'colorPalette.400' },
        _pressed: { bg: 'colorPalette.800', color: 'colorPalette.50' },
        _disabled: { bg: 'colorPalette.50' },
      },
    },
    size: {
      sm: {
        padding: '12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 500,
      },
      md: {
        padding: '16px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 550,
      },
      lg: {
        padding: '24px',
        borderRadius: '16px',
        fontSize: '16px',
        fontWeight: 600,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export const StyledButton = styled(Button, buttonStyle);
