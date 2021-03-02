import React, { memo, PropsWithChildren } from 'react';
import { fastClassName } from '../../utils';
import styles from './highlighter.module.scss';

const cn = fastClassName(styles);
const CLASS_NAME = 'Highlighter';

type HighlighterProps = PropsWithChildren<{
  color?: 'accent' | 'primary' | 'secondary' | 'error';
  isFilled?: boolean;
}>;

export const Highlighter = memo(({
  children,
  color = 'primary',
  isFilled = false,
}: HighlighterProps) => (
  <span
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--filled`]: isFilled,
      [`${CLASS_NAME}--color-${color}`]: color && !isFilled,
      [`${CLASS_NAME}--color-${color}-filled`]: color && isFilled,
    })}
  >
    {children}
  </span>
));
