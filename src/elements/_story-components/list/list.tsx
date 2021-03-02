import React, { memo, PropsWithChildren } from 'react';
import { fastClassName } from '../../utils';
import styles from './list.module.scss';

const cn = fastClassName(styles);
const CLASS_NAME = 'List';

export const List = memo((props: PropsWithChildren<{}>) => (
  <ul className={cn(CLASS_NAME)}>{props.children}</ul>
));

export const ListItem = memo((props: PropsWithChildren<{ isRow?: boolean }>) => (
  <li
    className={cn(`${CLASS_NAME}__item`, {
      [`${CLASS_NAME}__item--row`]: Boolean(props.isRow),
    })}
  >
    {props.children}
  </li>
));
