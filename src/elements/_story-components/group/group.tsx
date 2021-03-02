import React, { memo, PropsWithChildren, ReactNode } from 'react';
import { fastClassName } from '../../utils';
import styles from './group.module.scss';

const cn = fastClassName(styles);
const CLASS_NAME = 'Group';

export const Group = memo(({ children }: PropsWithChildren<ReactNode>) => (
  <div
    className={cn(CLASS_NAME)}
  >
    {children}
  </div>
));

export const GroupItem = memo(({ children }: PropsWithChildren<ReactNode>) => (
  <div
    className={cn(`${CLASS_NAME}__item`)}
  >
    {children}
  </div>
));
