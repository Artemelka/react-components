import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react';

type RadioEventParams = {
  name: string;
  value: string;
};
export type RadioFocusEvent = RadioEventParams & {
  event: FocusEvent<HTMLInputElement>;
};
export type RadioChangeEvent = RadioEventParams & {
  event: ChangeEvent<HTMLInputElement>;
};
export type RadioMouseEvent = RadioEventParams & {
  event: MouseEvent<HTMLInputElement>;
};
export type RadioKeyboardEvent = RadioEventParams & {
  event: KeyboardEvent<HTMLInputElement>;
};
