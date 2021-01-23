import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import { InputIconMouseEvent } from '../input/types';

type TextareaEventParams = {
  name: string;
  value: string;
}

export type TextareaFocusEvent = TextareaEventParams & {
  event: FocusEvent<HTMLTextAreaElement>;
};

export type TextareaChangeEvent = TextareaEventParams & {
  event: ChangeEvent<HTMLTextAreaElement>;
};

export type TextareaClickEvent = TextareaEventParams & {
  event: MouseEvent<HTMLTextAreaElement>;
};

export type TextareaKeyPressEvent = TextareaEventParams & {
  event: KeyboardEvent<HTMLTextAreaElement>;
};

export type TextareaIconConfig = {
  icon: ReactNode;
  onClick: (iconButtonEvent: InputIconMouseEvent) => void;
};
