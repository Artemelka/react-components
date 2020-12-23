import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import style from './text.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Text';

type TextPropsType = PropsWithChildren<{
  align?: 'center' | 'left' | 'right';
  fontSize?: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
  tagName?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  upper?: boolean;
}>;

export const Text = memo(({
  align = 'left',
  children,
  fontSize = 'regular',
  tagName: TagName = 'span',
  upper,
}: TextPropsType) => {
  return (
    <TagName
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--center`]: align === 'center',
        [`${CLASS_NAME}--right`]: align === 'right',
        [`${CLASS_NAME}--${fontSize}`]: fontSize,
        [`${CLASS_NAME}--upper`]: upper,
        [`${CLASS_NAME}--${TagName}`]: TagName,
      })}
    >
      {children}
    </TagName>
  );
});
