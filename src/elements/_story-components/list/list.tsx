import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './list.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'List';

export const List = memo((props: PropsWithChildren<{}>) => (
  <ul className={cn(CLASS_NAME)}>{props.children}</ul>
));

export const ListItem = memo((props: PropsWithChildren<{ isRow?: boolean }>) => (
  <li
    className={cn(`${CLASS_NAME}__item`, {
      [`${CLASS_NAME}__item--row`]: props.isRow,
    })}
  >
    {props.children}
  </li>
));
