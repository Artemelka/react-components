import React, { memo } from 'react';
import { fastClassName } from '@utils';
import { Label } from '../label';
import { Radio } from '../radio';
import { RadioChangeEvent } from '../radio/types';
import style from './radio-group.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Radio-group';

type RadioGroupItem = {
  disabled?: boolean;
  id: string | number;
  label: string;
  value: string;
};
type RadioGroupProps = {
  /** Текст ошибки */
  errorMessage?: string;
  /** Текст общего лейбла */
  groupLabel?: string;
  /** Флаг отображения текста ошибки */
  isError?: boolean;
  /** Флаг вертикального позиционирования кнопок */
  isVertical?: boolean;
  /** Массив набора параметров для кнопок */
  items: Array<RadioGroupItem>;
  /** Задает цвет лейблов */
  labelsThemeColor?: 'base' | 'accent' | 'main' | 'primary' | 'secondary';
  /** Задает имя группы инпутов */
  name: string;
  /** Колбэк события изменения значения */
  onChange: (radioEvent: RadioChangeEvent) => void;
  /** Задает размер кнопок */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему кнопок */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary';
  /** значение выбраной кнопки */
  value: string;
  /** Задает вид кнопок */
  variant?: 'base' | 'filled' | 'only-text';
};

export const RadioGroup = memo(({
  errorMessage,
  groupLabel = '',
  isError,
  isVertical,
  items,
  labelsThemeColor,
  name,
  onChange,
  size,
  themeColor,
  value: activeValue,
  variant,
}: RadioGroupProps) => (
  <div className={cn(CLASS_NAME)}>
    {Boolean(groupLabel) && (
      <div
        className={cn(`${CLASS_NAME}__label`, {
          [`${CLASS_NAME}__label--error`]: isError,
        })}
      >
        <Label
          position="left"
          size={size}
          themeColor={labelsThemeColor}
        >
          {groupLabel}
        </Label>
        {isError && (
          <p className={cn(`${CLASS_NAME}__error`)}>{errorMessage}</p>
        )}
      </div>
    )}
    <ul
      className={cn(`${CLASS_NAME}__list`, {
        [`${CLASS_NAME}__list--vertical`]: isVertical,
      })}
    >
      {items.map(({
        disabled,
        id,
        label,
        value,
      }) => (
        <li
          key={id}
          className={cn(`${CLASS_NAME}__item`, {
            [`${CLASS_NAME}__item--vertical`]: isVertical,
          })}
        >
          <Radio
            checked={activeValue === value}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange}
            size={size}
            themeColor={themeColor}
            value={value}
            variant={variant}
          />
          <Label
            disabled={disabled}
            htmlFor={id}
            position="right"
            size={size}
            themeColor={labelsThemeColor}
          >
            {label}
          </Label>
        </li>
      ))}
    </ul>
  </div>
));
