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
import { fastClassName } from '../utils';
import {
  ToggleChangeEvent,
  ToggleFocusEvent,
  ToggleKeyboardEvent,
  ToggleMouseEvent,
} from './types';
import style from './toggle.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Toggle';

type ToggleProps = {
  /** Флаг выбранного состояния */
  checked: boolean;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** уникальный идентификатор (возвращается в onChange) */
  id: string | number;
  /** Задает имя инпута */
  name: string;
  /** Колбек события потери фокуса */
  onBlur?: (checkboxEvent: ToggleFocusEvent) => void;
  /** Колбэк события изменения значения */
  onChange?: (checkboxEvent: ToggleChangeEvent) => void;
  /** Колбек события клика */
  onClick?: (checkboxEvent: ToggleMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (checkboxEvent: ToggleFocusEvent) => void;
  /** Колбек события клавиатуры (нажатие клавиши) */
  onKeyDown?: (checkboxEvent: ToggleKeyboardEvent) => void;
  /** Колбек события клавиатуры (общий) */
  onKeyPress?: (checkboxEvent: ToggleKeyboardEvent) => void;
  /** Колбек события клавиатуры (отпуск клавиши) */
  onKeyUp?: (checkboxEvent: ToggleKeyboardEvent) => void;
  /** Задает размер кнопки */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему кнопки */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary' | 'error';
  /** Объект для формирования рефа */
  toggleRef?: RefObject<HTMLInputElement>;
  /** Задает вид кнопки */
  variant?: 'base' | 'filled';
};

export const Toggle = memo(({
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
  size = 'medium',
  themeColor = 'base',
  toggleRef,
  variant = 'base',
}: ToggleProps) => {
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
    <span className={cn(CLASS_NAME)}>
      <label
        className={cn(`${CLASS_NAME}__label`, {
          [`${CLASS_NAME}__label--checked`]: !checked,
          [`${CLASS_NAME}__label--disabled`]: disabled,
          [`${CLASS_NAME}__label--size-${size}`]: Boolean(size),
          [`${CLASS_NAME}__label--theme-${themeColor}`]: Boolean(themeColor),
          [`${CLASS_NAME}__label--theme-${themeColor}--focused`]: themeColor && isFocused,
          [`${CLASS_NAME}__label--variant-${variant}`]: Boolean(variant),
          [`${CLASS_NAME}__label--variant-${variant}-${themeColor}`]: Boolean(variant && themeColor),
        })}
        htmlFor={`${id}`}
      >
        <input
          ref={toggleRef}
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
      </label>
    </span>
  );
});
