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
  /** Задает размер кнопок */
  size?: ButtonSize;
  /** Задает цветовую тему кнопок */
  themeColor?: ButtonThemeColor;
  /** Задает вид кнопок */
  variant?: ButtonVariant;
};

export const ButtonGroup = memo(({
  buttons,
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
        className={cn(`${CLASS_NAME}__item`, {
          [`${CLASS_NAME}__item--separated`]: variant === 'only-text'
        })}
      >
        <Button
          disabled={disabled}
          icon={icon}
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
          value={value}
          variant={variant}
        />
      </li>
    ))}
  </ul>
));
