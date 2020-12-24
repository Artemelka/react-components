import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import { TextAlign, TextFontSize, TextTagName } from './types';
import style from './text.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Text';

type TextPropsType = PropsWithChildren<{
  align?: TextAlign;
  fontSize?: TextFontSize;
  tagName?: TextTagName;
  upper?: boolean;
}>;

export const Text = memo(({
  align = 'left',
  children,
  fontSize = 'regular',
  tagName: TagName = 'span',
  upper,
}: TextPropsType) => (
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
));
