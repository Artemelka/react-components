import { FocusEvent, KeyboardEvent, MouseEvent } from 'react';

type ButtonEvent = {
  id?: string | number;
}
export type ButtonMouseEvent = ButtonEvent & {
  event: MouseEvent<HTMLButtonElement>;
};

export type ButtonKeyboardEvent = ButtonEvent & {
  event: KeyboardEvent<HTMLButtonElement>;
};

export type ButtonFocusEvent = ButtonEvent & {
  event: FocusEvent<HTMLButtonElement>;
};

export type ButtonAlignText = 'left' | 'center' | 'right';
export type ButtonSize = 'small' | 'medium' | 'big';

export type ButtonVariant = 'base' | 'filled' | 'only-text';

export type ButtonThemeColor = 'base' | 'main' | 'accent' | 'secondary' | 'primary' | 'success' | 'error';
