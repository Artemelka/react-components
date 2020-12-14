import React, {
  Component,
  ReactElement,
  RefObject,
  SyntheticEvent,
} from 'react';
import classNames from 'classnames/bind';
import { keyCodes } from '../constants';
import { CustomEvent, GetCustomClassName } from './types';
import style from './anchor.module.scss';

const cn = classNames.bind(style);
const { ENTER, SPACE } = keyCodes;
const targetKeyCodes = [ENTER, SPACE];
const LinkTargetAttr = {
  BLANK: '_blank',
  SELF: '_self',
};

export type AnchorProps = {
  /** Флаг активного состояния */
  active?: boolean;
  /** Объект для формирования рефа */
  anchorRef?: RefObject<HTMLAnchorElement>;
  /** текст ссылки или компонент */
  children?: string | ReactElement;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** URL адрес ссылки */
  href?: string;
  /** Флаг открытия ссылки в новом окне */
  newPage?: boolean;
  /** Колбек обработчик клика */
  onClick?: (event: SyntheticEvent) => void;
  /** Колбек для установки кастомных стилей */
  setCustomClassName?: GetCustomClassName;
};

export class Anchor extends Component<AnchorProps> {
  handleClick = (event: SyntheticEvent) => {
    const { disabled, newPage, onClick = () => false } = this.props;

    if (!newPage) {
      event.preventDefault();
    }

    if (!disabled) {
      onClick(event);
    }
  };

  handleKeyPress = (event: CustomEvent) => {
    const { keyCode, which } = event;
    const code = keyCode || which;

    if (targetKeyCodes.includes(code)) {
      this.handleClick(event);
    }
  };

  render() {
    const {
      active = false,
      anchorRef,
      children,
      disabled = false,
      href,
      newPage,
      setCustomClassName,
    } = this.props;
    const anchorClasses = cn('Anchor', {
      'Anchor--active': active,
      'Anchor--disabled': disabled,
    });
    const baseProps = {
      className: setCustomClassName
        ? setCustomClassName({ active, disabled })
        : anchorClasses,
      onClick: this.handleClick,
      onKeyPress: this.handleKeyPress,
    };

    return Boolean(href) && !disabled ? (
      <a
        {...baseProps}
        ref={anchorRef}
        href={href}
        target={newPage ? LinkTargetAttr.BLANK : LinkTargetAttr.SELF}
      >
        {children}
      </a>
    ) : (
      <button {...baseProps} disabled={disabled} type="button">
        {children}
      </button>
    );
  }
}
