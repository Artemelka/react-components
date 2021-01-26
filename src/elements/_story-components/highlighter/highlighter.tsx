import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './highlighter.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Highlighter';

type HighlighterProps = PropsWithChildren<{
  color?: 'accent' | 'primary' | 'secondary' | 'error';
  isFilled?: boolean;
}>;

export const Highlighter = memo(({
  children,
  color = 'primary',
  isFilled,
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
