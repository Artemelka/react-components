import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  memo,
  MouseEvent,
  RefObject,
  useCallback,
  useState,
} from 'react';
import { fastClassName } from '@utils';
import {
  RadioChangeEvent,
  RadioFocusEvent,
  RadioKeyboardEvent,
  RadioMouseEvent,
} from './types';
import styles from './radio.module.scss';

const cn = fastClassName(styles);
const CLASS_NAME = 'Radio';

type RadioProps = {
  /** Флаг выбранного состояния */
  checked: boolean;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** уникальный идентификатор (возвращается в onChange) */
  id: string | number;
  /** Задает имя инпута */
  name: string;
  /** Колбек события потери фокуса */
  onBlur?: (checkboxEvent: RadioFocusEvent) => void;
  /** Колбэк события изменения значения */
  onChange?: (checkboxEvent: RadioChangeEvent) => void;
  /** Колбек события клика */
  onClick?: (checkboxEvent: RadioMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (checkboxEvent: RadioFocusEvent) => void;
  /** Колбек события клавиатуры (нажатие клавиши) */
  onKeyDown?: (checkboxEvent: RadioKeyboardEvent) => void;
  /** Колбек события клавиатуры (общий) */
  onKeyPress?: (checkboxEvent: RadioKeyboardEvent) => void;
  /** Колбек события клавиатуры (отпуск клавиши) */
  onKeyUp?: (checkboxEvent: RadioKeyboardEvent) => void;
  /** Объект для формирования рефа */
  radioRef?: RefObject<HTMLInputElement>;
  /** Задает размер кнопки */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему кнопки */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary' | 'error';
  /** значение кнопки */
  value: string;
  /** Задает вид кнопки */
  variant?: 'base' | 'filled' | 'only-text';
};

export const Radio = memo(({
  checked,
  disabled,
  id,
  name,
  onBlur = () => false,
  onChange = () => false,
  onClick = () => false,
  onFocus = () => false,
  onKeyDown = () => false,
  onKeyPress = () => false,
  onKeyUp = () => false,
  radioRef,
  size = 'medium',
  themeColor = 'base',
  value,
  variant = 'base',
}: RadioProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    onBlur({ event, name, value });
    setIsFocused(false);
  }, [name, onBlur, value]);

  const handleFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    onFocus({ event, name, value });
    setIsFocused(true);
  }, [name, onFocus, value]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange({ event, name, value });
  }, [name, onChange, value]);

  const handleClick = useCallback((event: MouseEvent<HTMLInputElement>) => {
    onClick({ event, name, value });
  }, [name, onClick, value]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown({ event, name, value });
  }, [name, onKeyDown, value]);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress({ event, name, value });
  }, [name, onKeyPress, value]);

  const handleKeyUp = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    onKeyUp({ event, name, value });
  }, [name, onKeyUp, value]);

  return (
    <label
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--checked`]: checked,
        [`${CLASS_NAME}--disabled`]: disabled,
        [`${CLASS_NAME}--size-${size}`]: Boolean(size),
        [`${CLASS_NAME}--variant-${variant}`]: Boolean(variant),
        [`${CLASS_NAME}--variant-${variant}-checked`]: variant && checked,
        [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
        [`${CLASS_NAME}--theme-${themeColor}-focused`]: themeColor && isFocused,
      })}
      htmlFor={`${id}`}
    >
      <input
        ref={radioRef}
        checked={checked}
        className={cn(`${CLASS_NAME}__input`)}
        disabled={disabled}
        id={`${id}`}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        type="radio"
        value={value}
      />
      <span
        className={cn(`${CLASS_NAME}__marker`, {
          [`${CLASS_NAME}__marker--checked`]: checked,
          [`${CLASS_NAME}__marker--disabled`]: disabled,
          [`${CLASS_NAME}__marker--size-${size}`]: Boolean(size),
          [`${CLASS_NAME}__marker--variant-${variant}`]: Boolean(variant),
          [`${CLASS_NAME}__marker--variant-filled-base`]: variant === 'filled' && themeColor === 'base',
          [`${CLASS_NAME}__marker--theme-${themeColor}`]: Boolean(themeColor),
        })}
      />
    </label>
  );
});
