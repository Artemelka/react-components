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
import { ButtonMouseEvent, ButtonKeyboardEvent, ButtonFocusEvent } from './types';
import style from './button.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Button';

type ButtonProps = {
  buttonRef?: RefObject<HTMLButtonElement>;
  disabled?: boolean;
  icon?: ReactNode;
  id?: string | number;
  isLeftRound?: boolean;
  isRightRound?: boolean;
  onBlur?: (buttonFocusEvent: ButtonFocusEvent) => void;
  onClick?: (buttonClickEvent: ButtonMouseEvent) => void;
  onFocus?: (buttonFocusEvent: ButtonFocusEvent) => void;
  onKeyDown?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  onKeyPress?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  onKeyUp?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  size?: 'small' | 'medium' | 'big';
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  variant?: 'base' | 'filled' | 'only-text';
  themeColor?: 'main' | 'accent' | 'secondary' | 'primary' | 'success' | 'error';
};

export const Button = memo(({
  buttonRef,
  disabled,
  icon,
  id,
  isLeftRound,
  isRightRound,
  onBlur = () => false,
  onClick = () => false,
  onFocus = () => false,
  onKeyDown = () => false,
  onKeyPress = () => false,
  onKeyUp = () => false,
  size = 'medium',
  themeColor = 'main',
  type = 'button',
  value,
  variant = 'base',
}: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

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
        setIsActive(true);
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
        setIsActive(false);
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
        [`${CLASS_NAME}--disabled`]: disabled,
        [`${CLASS_NAME}--round-left`]: isLeftRound,
        [`${CLASS_NAME}--round-right`]: isRightRound,
        [`${CLASS_NAME}--icon`]: !value,
        [`${CLASS_NAME}--icon-${size}`]: !value && size,
        [`${CLASS_NAME}--${themeColor}`]: themeColor,
        [`${CLASS_NAME}--${size}`]: size,
        [`${CLASS_NAME}--${variant}`]: variant,
      })}
      disabled={disabled}
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
