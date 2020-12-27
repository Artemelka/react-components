import React, {
  FocusEvent,
  KeyboardEvent,
  memo,
  MouseEvent,
  ReactNode,
  RefObject,
  useCallback,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import { KEY_CODES } from '../constants';
import {
  ButtonAlignText,
  ButtonFocusEvent,
  ButtonKeyboardEvent,
  ButtonMouseEvent,
  ButtonRound,
  ButtonSize,
  ButtonThemeColor,
  ButtonVariant,
} from './types';
import style from './button.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Button';

type ButtonProps = {
  /** Задает горизонтальное выравнивание контента (работает только при isFullWidth: true) */
  alignText?: ButtonAlignText;
  /** Объект для формирования рефа */
  buttonRef?: RefObject<HTMLButtonElement>;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Елемент иконки */
  icon?: ReactNode;
  /** уникальный идентификатор (возвращается в onClick) */
  id?: string | number;
  /** Флаг активного состояния кнопки */
  isActive?: boolean;
  /** Флаг устанавливает свойство width: 100% */
  isFullWidth?: boolean;
  /** Колбек события потери фокуса */
  onBlur?: (buttonFocusEvent: ButtonFocusEvent) => void;
  /** Колбек события клика */
  onClick?: (buttonClickEvent: ButtonMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (buttonFocusEvent: ButtonFocusEvent) => void;
  /** Колбек события клавиатуры (нажатие клавиши) */
  onKeyDown?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  /** Колбек события клавиатуры (общий) */
  onKeyPress?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  /** Колбек события клавиатуры (отпуск клавиши) */
  onKeyUp?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  /** Задает сторону скругления углов кнопки */
  roundSide?: ButtonRound;
  /** Задает размер кнопки */
  size?: ButtonSize;
  /** Задает цветовую тему кнопки */
  themeColor?: ButtonThemeColor;
  /**  */
  type?: 'button' | 'submit' | 'reset';
  /** Содержимое кнопки */
  value?: string;
  /** Задает вид кнопки */
  variant?: ButtonVariant;
};

export const Button = memo(({
  alignText = 'center',
  buttonRef,
  disabled,
  icon,
  id,
  isActive,
  isFullWidth,
  onBlur = () => false,
  onClick = () => false,
  onFocus = () => false,
  onKeyDown = () => false,
  onKeyPress = () => false,
  onKeyUp = () => false,
  roundSide,
  size = 'medium',
  themeColor = 'base',
  type = 'button',
  value,
  variant = 'base',
}: ButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = useCallback((event: FocusEvent<HTMLButtonElement>) => {
    onBlur({ event, id });
  }, [id, onBlur]);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick({ event, id });
    }
  }, [disabled, id, onClick]);

  const handleFocus = useCallback((event: FocusEvent<HTMLButtonElement>) => {
    onFocus({ event, id });
  }, [id, onFocus]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
    if (!disabled) {
      if (KEY_CODES.ENTER === event.keyCode) {
        setIsFocused(true);
      }

      onKeyDown({ event, id });
    }
  }, [disabled, id, onKeyDown]);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onKeyPress({ event, id });
    }
  }, [disabled, id, onKeyPress]);

  const handleKeyUp = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
    if (!disabled) {
      if (KEY_CODES.ENTER === event.keyCode) {
        setIsFocused(false);
      }

      onKeyUp({ event, id });
    }
  }, [disabled, id, onKeyUp]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={buttonRef}
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--active`]: isActive,
        [`${CLASS_NAME}--active-disabled`]: isActive && disabled,
        [`${CLASS_NAME}--align-${alignText}`]: alignText,
        [`${CLASS_NAME}--disabled`]: disabled,
        [`${CLASS_NAME}--focused`]: isFocused,
        [`${CLASS_NAME}--full-width`]: isFullWidth,
        [`${CLASS_NAME}--rounded`]: roundSide,
        [`${CLASS_NAME}--round-${roundSide}`]: roundSide,
        [`${CLASS_NAME}--icon`]: !value,
        [`${CLASS_NAME}--icon-active`]: !value && isActive,
        [`${CLASS_NAME}--icon-${size}`]: !value && size,
        [`${CLASS_NAME}--theme-${themeColor}`]: themeColor,
        [`${CLASS_NAME}--size-${size}`]: size,
        [`${CLASS_NAME}--variant-${variant}`]: variant,
        [`${CLASS_NAME}--variant-${variant}-base`]: themeColor === 'base',
      })}
      disabled={disabled || isActive}
      onBlur={handleBlur}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      type={type}
    >
      <span
        className={cn(`${CLASS_NAME}__content`, {
          [`${CLASS_NAME}__content--only-icon`]: !value,
        })}
      >
        {icon && (
          <span
            className={cn(`${CLASS_NAME}__icon-left`, {
              [`${CLASS_NAME}__icon-left--only`]: !value,
            })}
          >
            {icon}
          </span>
        )}
        {value}
      </span>
    </button>
  );
});
