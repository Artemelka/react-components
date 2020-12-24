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
