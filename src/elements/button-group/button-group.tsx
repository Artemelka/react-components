import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../button';
import {
  ButtonSize,
  ButtonThemeColor,
  ButtonVariant,
} from '../button/types';
import { ButtonGroupItem } from './types';
import style from './button-group.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Button-group';

type ButtonGroupPropsType = {
  /** Массив пармаетров для кнопок (принемает не все параметры Button) */
  buttons: Array<ButtonGroupItem>;
  /** Флаг для отображения кнопок с иконками */
  isOnlyIcons?: boolean;
  /** Задает размер кнопок */
  size?: ButtonSize;
  /** Задает цветовую тему кнопок */
  themeColor?: ButtonThemeColor;
  /** Задает вид кнопок */
  variant?: ButtonVariant;
};

export const ButtonGroup = memo(({
  buttons,
  isOnlyIcons,
  size,
  themeColor,
  variant,
}: ButtonGroupPropsType) => (
  <ul className={cn(CLASS_NAME)}>
    {buttons.map(({
      disabled,
      icon,
      id,
      onBlur,
      onClick,
      onFocus,
      onKeyPress,
      value,
    }, index) => (
      <li
        key={value || id || index}
        className={cn(`${CLASS_NAME}__item`, {
          [`${CLASS_NAME}__item--separated`]: variant === 'only-text',
          [`${CLASS_NAME}__item--only-icon`]: isOnlyIcons,
        })}
      >
        <Button
          disabled={disabled}
          id={id}
          isLeftRound={index === 0}
          isRightRound={index === buttons.length - 1}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          size={size}
          themeColor={themeColor}
          type="button"
          variant={variant}
          {...(isOnlyIcons ? { icon } : { value })}
        />
      </li>
    ))}
  </ul>
));
