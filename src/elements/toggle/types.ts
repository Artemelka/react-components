import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react';

type ToggleEventParams = {
  name: string;
  checked: boolean;
};
export type ToggleFocusEvent = ToggleEventParams & {
  event: FocusEvent<HTMLInputElement>;
};
export type ToggleChangeEvent = ToggleEventParams & {
  event: ChangeEvent<HTMLInputElement>;
};
export type ToggleMouseEvent = ToggleEventParams & {
  event: MouseEvent<HTMLInputElement>;
};
export type ToggleKeyboardEvent = ToggleEventParams & {
  event: KeyboardEvent<HTMLInputElement>;
};
