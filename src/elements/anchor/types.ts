import { MouseEvent, KeyboardEvent, FocusEvent } from 'react';

type AnchorEvent = {
  href: string;
  id?: string;
};

export type AnchorMouseEvent = AnchorEvent & {
  event: MouseEvent<HTMLAnchorElement>;
};

export type AnchorKeyboardEvent = AnchorEvent & {
  event: KeyboardEvent<HTMLAnchorElement>;
};

export type AnchorFocusEvent = AnchorEvent & {
  event: FocusEvent<HTMLAnchorElement>;
};
