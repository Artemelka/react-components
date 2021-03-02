import React, {
  ChangeEvent,
  memo,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  useCallback, useState,
} from 'react';
import { fastClassName } from '../utils';
import { Button } from '../button';
import { ButtonMouseEvent } from '../button/types';
import {
  TextareaChangeEvent,
  TextareaClickEvent,
  TextareaFocusEvent,
  TextareaIconConfig,
  TextareaKeyPressEvent,
} from './types';
import styles from './textarea.module.scss';

const cn = fastClassName(styles);
const CLASS_NAME = 'Textarea';

type TextareaProps = {
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Текст ошибки */
  errorMessage?: string;
  /** Конфиг параметров кнопки */
  iconConfig?: TextareaIconConfig;
  /** уникальный идентификатор (возвращается в onChange) */
  id?: string | number;
  /** Флаг отображения ошибки */
  isError?: boolean;
  /** Количество допустимых символов */
  maxlength?: number;
  /** Задает имя инпута */
  name: string;
  /** Колбек события потери фокуса */
  onBlur?: (textareaEvent: TextareaFocusEvent) => void;
  /** Колбэк события изменения значения */
  onChange?: (textareaEvent: TextareaChangeEvent) => void;
  /** Колбек события клика */
  onClick?: (textareaEvent: TextareaClickEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (textareaEvent: TextareaFocusEvent) => void;
  /** Колбек события клавиатуры (нажатие клавиши) */
  onKeyDown?: (textareaEvent: TextareaKeyPressEvent) => void;
  /** Колбек события клавиатуры (общий) */
  onKeyPress?: (textareaEvent: TextareaKeyPressEvent) => void;
  /** Колбек события клавиатуры (отпуск клавиши) */
  onKeyUp?: (textareaEvent: TextareaKeyPressEvent) => void;
  /** Заполнитель пустого значения инпута */
  placeholder?: string;
  /** Флаг состояния только чтение */
  readOnly?: boolean;
  /** Количество видимых строк */
  rows?: number;
  /** Задает размер инпута */
  size?: 'small' | 'medium' | 'big';
  /** Объект для формирования рефа */
  textareaRef?: RefObject<HTMLTextAreaElement>;
  /** Задает цветовую тему инпута */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary';
  /** Содержимое инпута */
  value: string;
  /** Задает вид инпута */
  variant?: 'base' | 'filled' | 'only-text';
};

export const Textarea = memo(({
  disabled,
  errorMessage,
  iconConfig,
  id,
  isError,
  maxlength,
  name,
  onBlur = () => false,
  onChange = () => false,
  onClick = () => false,
  onFocus = () => false,
  onKeyDown = () => false,
  onKeyPress = () => false,
  onKeyUp = () => false,
  placeholder,
  readOnly,
  rows,
  size = 'medium',
  textareaRef,
  themeColor = 'base',
  value,
  variant = 'base',
}: TextareaProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const { icon, onClick: onIconClick = () => false } = iconConfig || {};

  const handleIconClick = useCallback(({ event, id: buttonId }: ButtonMouseEvent) => {
    onIconClick({
      event,
      id: `${buttonId}`,
      name,
      value,
    });
  }, [name, onIconClick, value]);

  const handleBlur = useCallback((event: FocusEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onBlur({ event, name, value: textareaValue });
    setIsFocus(false);
  }, [name, onBlur]);

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onChange({ event, name, value: textareaValue });
  }, [name, onChange]);

  const handleClick = useCallback((event: MouseEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onClick({ event, name, value: textareaValue });
  }, [name, onClick]);

  const handleFocus = useCallback((event: FocusEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onFocus({ event, name, value: textareaValue });
    setIsFocus(true);
  }, [name, onFocus]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onKeyDown({ event, name, value: textareaValue });
  }, [name, onKeyDown]);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onKeyPress({ event, name, value: textareaValue });
  }, [name, onKeyPress]);

  const handleKeyUp = useCallback((event: KeyboardEvent<HTMLTextAreaElement>) => {
    const { value: textareaValue } = event.currentTarget;

    onKeyUp({ event, name, value: textareaValue });
  }, [name, onKeyUp]);

  return (
    <div
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--focused`]: isFocus,
        [`${CLASS_NAME}--focused-error`]: isFocus && isError,
        [`${CLASS_NAME}--with-information`]: Boolean(maxlength || errorMessage),
      })}
    >
      <textarea
        ref={textareaRef}
        className={cn(`${CLASS_NAME}__input`, {
          [`${CLASS_NAME}__input--disabled`]: disabled,
          [`${CLASS_NAME}__input--error`]: isError,
          [`${CLASS_NAME}__input--size-${size}`]: Boolean(size),
          [`${CLASS_NAME}__input--size-${size}-icon`]: Boolean(iconConfig),
          [`${CLASS_NAME}__input--variant-${variant}`]: Boolean(variant),
          [`${CLASS_NAME}__input--variant-${variant}-error`]: variant && isError,
          [`${CLASS_NAME}__input--theme-${themeColor}`]: Boolean(themeColor),
        })}
        disabled={disabled}
        id={`${id}`}
        maxLength={maxlength}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        spellCheck
        style={{ resize: 'none' }}
        value={value}
      />
      {iconConfig && (
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            icon={icon}
            id={id}
            onClick={handleIconClick}
            size={size}
            themeColor={themeColor}
            variant="only-text"
          />
        </div>
      )}
      {(errorMessage || maxlength) && (
        <div className={cn(`${CLASS_NAME}__information`)}>
          {isError && errorMessage && (
            <span className={cn(`${CLASS_NAME}__error`)}>
              {errorMessage}
            </span>
          )}
          {maxlength && (
            <div className={cn(`${CLASS_NAME}__counter`)}>
              <span className={cn(`${CLASS_NAME}__counter-value`)}>
                {`${value.length}`}
              </span>
              <span className={cn(`${CLASS_NAME}__counter-max-value`)}>
                {` / ${maxlength}`}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
