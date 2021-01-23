import React, {
  ChangeEvent,
  memo,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  useCallback, useState,
} from 'react';
import classNames from 'classnames/bind';
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

const cn = classNames.bind(styles);
const CLASS_NAME = 'Textarea';

type TextareaProps = {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  iconConfig?: TextareaIconConfig;
  id?: string | number;
  maxlength?: number;
  name: string;
  onBlur?: (textareaEvent: TextareaFocusEvent) => void;
  onChange?: (textareaEvent: TextareaChangeEvent) => void;
  onClick?: (textareaEvent: TextareaClickEvent) => void;
  onFocus?: (textareaEvent: TextareaFocusEvent) => void;
  onKeyDown?: (textareaEvent: TextareaKeyPressEvent) => void;
  onKeyPress?: (textareaEvent: TextareaKeyPressEvent) => void;
  onKeyUp?: (textareaEvent: TextareaKeyPressEvent) => void;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  size?: 'small' | 'medium' | 'big';
  textareaRef?: RefObject<HTMLTextAreaElement>;
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary';
  value: string;
  variant?: 'base' | 'filled' | 'only-text';
};

export const Textarea = memo(({
  disabled,
  error,
  errorMessage,
  iconConfig,
  id,
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
        [`${CLASS_NAME}--focused-error`]: isFocus && error,
        [`${CLASS_NAME}--with-information`]: maxlength || errorMessage,
      })}
    >
      <textarea
        ref={textareaRef}
        className={cn(`${CLASS_NAME}__input`, {
          [`${CLASS_NAME}__input--disabled`]: disabled,
          [`${CLASS_NAME}__input--error`]: error,
          [`${CLASS_NAME}__input--size-${size}`]: size,
          [`${CLASS_NAME}__input--size-${size}-icon`]: iconConfig,
          [`${CLASS_NAME}__input--variant-${variant}`]: variant,
          [`${CLASS_NAME}__input--variant-${variant}-error`]: variant && error,
          [`${CLASS_NAME}__input--theme-${themeColor}`]: themeColor,
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
          {error && errorMessage && (
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
