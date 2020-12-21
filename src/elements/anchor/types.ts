import { SyntheticEvent } from 'react';

export type LinkEvent = {
  event: SyntheticEvent<HTMLAnchorElement>;
  href?: string;
  id?: string;
};
