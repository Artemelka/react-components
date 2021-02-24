import React, { memo, PropsWithChildren } from 'react';
import { fastClassName } from '@utils';
import { TextAlign, TextFontWeight, TextTagName } from './types';
import style from './text.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Text';

type TextPropsType = PropsWithChildren<{
  /** Задает горизонтальное выравнивание */
  align?: TextAlign;
  /** Задает вес шрифта */
  fontWeight?: TextFontWeight;
  /** Задает тэг элемента */
  tagName?: TextTagName;
  /** Флаг устанавливает значение text-transform: uppercase */
  upper?: boolean;
}>;

export const Text = memo(({
  align = 'left',
  children,
  fontWeight = 'regular',
  tagName: TagName = 'span',
  upper,
}: TextPropsType) => (
  <TagName
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--center`]: align === 'center',
      [`${CLASS_NAME}--right`]: align === 'right',
      [`${CLASS_NAME}--${fontWeight}`]: Boolean(fontWeight),
      [`${CLASS_NAME}--upper`]: upper,
      [`${CLASS_NAME}--${TagName}`]: Boolean(TagName),
    })}
  >
    {children}
  </TagName>
));
