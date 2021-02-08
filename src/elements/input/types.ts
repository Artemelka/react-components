import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';

type InputEventParams = {
  name: string;
  value: string;
};
export type InputFocusEvent = InputEventParams & {
  event: FocusEvent<HTMLInputElement>;
};
export type InputChangeEvent = InputEventParams & {
  event: ChangeEvent<HTMLInputElement>;
};
export type InputMouseEvent = InputEventParams & {
  event: MouseEvent<HTMLInputElement>;
};
export type InputKeyboardEvent = InputEventParams & {
  event: KeyboardEvent<HTMLInputElement>;
};
export type InputIconMouseEvent = {
  event: MouseEvent<HTMLButtonElement>;
  id?: string;
  name: string;
  value: string;
};

export type InputIconConfig = {
  alwaysVisible?: boolean;
  icon: ReactNode;
  onClick?: (iconButtonEvent: InputIconMouseEvent) => void;
};
