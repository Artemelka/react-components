import React, {
  ChangeEvent,
  Component,
  createRef,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
} from 'react';
import classNames from 'classnames/bind';
import { Button } from '../button';
import { KEY_CODES } from '../constants';
import { ButtonMouseEvent, ButtonKeyboardEvent } from '../button/types';
import {
  InputChangeEvent,
  InputFocusEvent,
  InputIconConfig,
  InputKeyboardEvent,
  InputMouseEvent,
} from './types';
import style from './input.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Input';

type InputProps = {
  /** Параметр включает или отключает автодополнение */
  autoComplete?: 'on' | 'off';
  /** Флаг включающий автофокус на инпуте */
  autoFocus?: boolean;
  /** Флаг меняющий курсор инпута (нужен для реализации select) */
  cursorPointer?: boolean;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Задает конфиг для отображения иконки в инпуте */
  iconConfig?: InputIconConfig;
  /** уникальный идентификатор (возвращается в onClick) */
  id?: string;
  /** Объект для формирования рефа */
  inputRef?: RefObject<HTMLInputElement>;
  /** Флаг состояния ошибки */
  isError?: boolean;
  /** Задает имя инпута */
  name: string;
  /** Колбек события потери фокуса */
  onBlur?: (inputFocusEvent: InputFocusEvent) => void;
  /** Колбэк события изменения значения */
  onChange?: (inputChangeEvent: InputChangeEvent) => void;
  /** Колбек события клика */
  onClick?: (inputMouseEvent: InputMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (inputFocusEvent: InputFocusEvent) => void;
  /** Колбек события клавиатуры */
  onKeyPress?: (inputKeyboardEvent: InputKeyboardEvent) => void;
  /** Заполнитель пустого значения инпута */
  placeholder?: string;
  /** Флаг состояния только чтение */
  readOnly?: boolean;
  /** Задает размер инпута */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему инпута */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary' | 'success';
  /** Задает тип инпута */
  type?: 'text' | 'number' | 'password';
  /** Содержимое инпута */
  value: string;
  /** Задает вид инпута */
  variant?: 'base' | 'filled' | 'only-text';
};

export class Input extends Component<InputProps, { isFocus: boolean }> {
  inputRef = this.props.inputRef || createRef();

  ignoreFocus = false;

  calledClick = false;

  state = {
    isFocus: false,
  }

  handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { name, onBlur = () => false } = this.props;

    onBlur({ event, value, name });
    this.setState({ isFocus: false });
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { name, onChange = () => false } = this.props;

    onChange({ event, value, name });
  }

  handleClick = (event: MouseEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { name, onClick = () => false } = this.props;

    onClick({ event, value, name });
  }

  handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { name, onFocus = () => false } = this.props;

    onFocus({ event, value, name });
    this.setState({ isFocus: true });
  }

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const { name, onKeyPress = () => false } = this.props;

    onKeyPress({ event, value, name });
  }

  handleIconClick = ({ event }: ButtonMouseEvent) => {
    const { iconConfig: { onClick: onIconClick } = {} } = this.props;
    const isClick = !this.ignoreFocus || (this.ignoreFocus && !this.calledClick);

    if (onIconClick && isClick) {
      onIconClick({
        event,
        id: this.props.id,
        name: this.props.name,
        value: this.props.value,
      });
      this.calledClick = true;
    }

    if (this.inputRef.current && !this.ignoreFocus) {
      this.inputRef.current.focus();
    }
  }

  handleIconKeyDown = ({ event }: ButtonKeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ENTER) {
      this.ignoreFocus = true;
    }
  }

  handleIconKeyUp = ({ event }: ButtonKeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ENTER && this.inputRef.current) {
      this.inputRef.current.focus();
      this.ignoreFocus = false;
      this.calledClick = false;
    }
  }

  render() {
    const {
      autoComplete = 'off',
      disabled = false,
      iconConfig: { icon, onClick: onIconClick } = {},
      isError = false,
      readOnly = false,
      size = 'medium',
      themeColor = 'base',
      type = 'text',
      value,
      variant = 'base',
    } = this.props;
    const hasIcon = icon && !disabled && !readOnly && (!onIconClick || Boolean(value));

    return (
      <div
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--error`]: isError,
          [`${CLASS_NAME}--focused`]: this.state.isFocus,
          [`${CLASS_NAME}--focused-error`]: this.state.isFocus && isError,
        })}
      >
        <input
          ref={this.inputRef}
          autoComplete={autoComplete}
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus={this.props.autoFocus}
          className={cn(`${CLASS_NAME}__element`, {
            [`${CLASS_NAME}__element--cursor-pointer`]: this.props.cursorPointer,
            [`${CLASS_NAME}__element--disabled`]: disabled,
            [`${CLASS_NAME}__element--error`]: isError,
            [`${CLASS_NAME}__element--number`]: type === 'number',
            [`${CLASS_NAME}__element--size-${size}`]: size,
            [`${CLASS_NAME}__element--size-${size}-icon`]: hasIcon && size,
            [`${CLASS_NAME}__element--theme-${themeColor}`]: themeColor,
            [`${CLASS_NAME}__element--variant-${variant}`]: variant,
          })}
          disabled={disabled}
          id={this.props.id}
          name={this.props.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onClick={this.handleClick}
          onFocus={this.handleFocus}
          onKeyPress={this.handleKeyPress}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          type={type}
          value={value}
        />
        {hasIcon && (
          <div className={cn(`${CLASS_NAME}__icon`)}>
            <Button
              disabled={!Boolean(onIconClick)}
              icon={icon}
              onClick={this.handleIconClick}
              onKeyDown={this.handleIconKeyDown}
              onKeyUp={this.handleIconKeyUp}
              size={size}
              themeColor={themeColor}
              variant="only-text"
            />
          </div>
        )}
      </div>
    );
  }
}
