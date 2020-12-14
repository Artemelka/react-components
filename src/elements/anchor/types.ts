import { SyntheticEvent } from 'react';

type CustomClassNameParams = { active: boolean; disabled: boolean };

export type CustomEvent = SyntheticEvent & {
  keyCode: number;
  which: number;
};

export type GetCustomClassName = (params: CustomClassNameParams) => string;
