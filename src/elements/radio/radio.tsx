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
import classNames from 'classnames/bind';
import {
  RadioChangeEvent,
  RadioFocusEvent,
  RadioKeyboardEvent,
  RadioMouseEvent,
} from './types';
import styles from './radio.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Radio';

type RadioProps = {
  checked: boolean;
  checkboxRef?: RefObject<HTMLInputElement>;
  disabled?: boolean;
  id: string | number;
  name: string;
  onBlur?: (checkboxEvent: RadioFocusEvent) => void;
  onChange?: (checkboxEvent: RadioChangeEvent) => void;
  onClick?: (checkboxEvent: RadioMouseEvent) => void;
  onFocus?: (checkboxEvent: RadioFocusEvent) => void;
  onKeyDown?: (checkboxEvent: RadioKeyboardEvent) => void;
  onKeyPress?: (checkboxEvent: RadioKeyboardEvent) => void;
  onKeyUp?: (checkboxEvent: RadioKeyboardEvent) => void;
  size?: 'small' | 'medium' | 'big';
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary' | 'success';
  value: string;
  variant?: 'base' | 'filled' | 'only-text';
};

export const Radio = memo(({
  checked,
  checkboxRef,
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
        [`${CLASS_NAME}--focused`]: isFocused,
        [`${CLASS_NAME}--size-${size}`]: size,
        [`${CLASS_NAME}--variant-${variant}`]: variant,
        [`${CLASS_NAME}--variant-${variant}-checked`]: variant && checked,
        [`${CLASS_NAME}--theme-${themeColor}`]: themeColor,
      })}
      htmlFor={`${id}`}
    >
      <input
        ref={checkboxRef}
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
          [`${CLASS_NAME}__marker--size-${size}`]: size,
          [`${CLASS_NAME}__marker--variant-${variant}`]: variant,
          [`${CLASS_NAME}__marker--variant-filled-base`]: variant === 'filled' && themeColor === 'base',
          [`${CLASS_NAME}__marker--theme-${themeColor}`]: themeColor,
        })}
      />
    </label>
  );
});
