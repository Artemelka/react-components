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
  CheckboxChangeEvent,
  CheckboxFocusEvent,
  CheckboxKeyboardEvent,
  CheckboxMouseEvent,
} from './types';
import styles from './checkbox.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Checkbox';

type CheckboxProps = {
  checked: boolean;
  checkboxRef?: RefObject<HTMLInputElement>;
  disabled?: boolean;
  id: string | number;
  indeterminate?: boolean;
  name: string;
  onBlur?: (checkboxEvent: CheckboxFocusEvent) => void;
  onChange?: (checkboxEvent: CheckboxChangeEvent) => void;
  onClick?: (checkboxEvent: CheckboxMouseEvent) => void;
  onFocus?: (checkboxEvent: CheckboxFocusEvent) => void;
  onKeyDown?: (checkboxEvent: CheckboxKeyboardEvent) => void;
  onKeyPress?: (checkboxEvent: CheckboxKeyboardEvent) => void;
  onKeyUp?: (checkboxEvent: CheckboxKeyboardEvent) => void;
  size?: 'small' | 'medium' | 'big';
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary' | 'success';
  variant?: 'base' | 'filled' | 'only-text';
};

export const Checkbox = memo(({
  checked,
  checkboxRef,
  disabled,
  id,
  indeterminate,
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
  variant = 'base',
}: CheckboxProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    onBlur({ event, name, checked });
    setIsFocused(false);
  }, [checked, name, onBlur]);

  const handleFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    onFocus({ event, name, checked });
    setIsFocused(true);
  }, [checked, name, onFocus]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onChange({ event, checked: checkboxState, name });
  }, [name, onChange]);

  const handleClick = useCallback((event: MouseEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onClick({ event, checked: checkboxState, name });
  }, [name, onClick]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onKeyDown({ event, checked: checkboxState, name });
  }, [name, onKeyDown]);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onKeyPress({ event, checked: checkboxState, name });
  }, [name, onKeyPress]);

  const handleKeyUp = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onKeyUp({ event, checked: checkboxState, name });
  }, [name, onKeyUp]);

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
        type="checkbox"
      />
      <span
        className={cn(`${CLASS_NAME}__marker`, {
          [`${CLASS_NAME}__marker--checked`]: checked,
          [`${CLASS_NAME}__marker--disabled`]: disabled,
          [`${CLASS_NAME}__marker--indeterminate`]: indeterminate,
          [`${CLASS_NAME}__marker--size-${size}`]: size,
          [`${CLASS_NAME}__marker--variant-${variant}`]: variant,
          [`${CLASS_NAME}__marker--variant-filled-base`]: variant === 'filled' && themeColor === 'base',
          [`${CLASS_NAME}__marker--theme-${themeColor}`]: themeColor,
        })}
      />
    </label>
  );
});
