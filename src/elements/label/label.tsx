import React, { memo } from 'react';
import classNames from 'classnames/bind';
import style from './label.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Label';

type TemplateProps = {
  children: string;
  disabled?: boolean;
  htmlFor?: string | number;
  isError?: boolean;
  position?: 'left' | 'right' |'top' ;
  size?: 'big' | 'medium' | 'small';
  themeColor?: 'base' | 'accent' | 'main' | 'primary' | 'secondary';
};

export const Label = memo(({
  children,
  disabled,
  htmlFor,
  isError,
  position = 'top',
  size = 'medium',
  themeColor = 'main',
}: TemplateProps) => (
  <label
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--clickable`]: htmlFor,
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--error`]: isError,
      [`${CLASS_NAME}--size-${size}`]: size,
      [`${CLASS_NAME}--position-${position}`]: position,
      [`${CLASS_NAME}--theme-${themeColor}`]: themeColor,
    })}
    htmlFor={`${htmlFor}`}
  >
    {children}
  </label>
));
