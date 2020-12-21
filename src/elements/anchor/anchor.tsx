import React, {
  memo,
  ReactElement,
  RefObject,
  SyntheticEvent,
  useCallback,
} from 'react';
import classNames from 'classnames/bind';
import { LinkEvent } from './types';
import style from './anchor.module.scss';

const cn = classNames.bind(style);

export type AnchorProps = {
  /** Флаг активного состояния */
  active?: boolean;
  /** Объект для формирования рефа */
  anchorRef?: RefObject<HTMLAnchorElement>;
  /** текст ссылки или компонент */
  children?: string | ReactElement;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Указывает браузеру загрузить связанный ресурс, а не открывать его */
  download?: boolean;
  /** URL адрес ссылки (возвращается в onClick) */
  href: string;
  /** Идентификатор ссылки (возвращается в onClick) */
  id?: string;
  /** Колбек события потери фокуса */
  onBlur?: (event: SyntheticEvent<HTMLAnchorElement>) => void;
  /** Колбек события клика */
  onClick?: (linkEvent: LinkEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (event: SyntheticEvent<HTMLAnchorElement>) => void;
  /** Колбек события клавиатуры */
  onKeyPress?: (linkEvent: LinkEvent) => void;
  /** Список URL-адресов разделенных пробелами
   * (При переходе по ссылке браузер отправляет POST запросы с текстом PING)
   * */
  ping?: string;
  /** Отношение связанного URL как типов ссылок, разделенных пробелами */
  rel?: string;
  /** Указывает, где открыть связанный документ */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Определяет заголовок ссылки, который отображается во всплывающей подсказке */
  title?: string;
  /** Формат связанного URL с типом MIME */
  type?: string;
  /** вызывает preventDefault в обработчиках onClick и onKeyPress */
  withPreventedEvent?: boolean;
};

export const Anchor = memo(
  ({
    active,
    anchorRef,
    children,
    disabled,
    download,
    href,
    id,
    onBlur = () => false,
    onClick = () => false,
    onFocus = () => false,
    onKeyPress = () => false,
    ping,
    rel = 'noreferrer noopener',
    target = '_blank',
    title,
    withPreventedEvent,
  }: AnchorProps) => {
    const handleClick = useCallback((event: SyntheticEvent<HTMLAnchorElement>) => {
      if (withPreventedEvent || disabled) {
        event.preventDefault();
      }

      if (!disabled) {
        onClick({ event, href, id });
      }
    }, [disabled, href, id, withPreventedEvent, onClick]);

    const handleKeyPress = useCallback((event: SyntheticEvent<HTMLAnchorElement>) => {
      if (withPreventedEvent || disabled) {
        event.preventDefault();
      }

      onKeyPress({ event, href, id });
    }, [disabled, href, id, onKeyPress, withPreventedEvent]);

    const handleFocus = useCallback((event: SyntheticEvent<HTMLAnchorElement>) => {
      if (!disabled) {
        onFocus(event);
      }
    }, [disabled, onFocus]);

    const handleBlur = useCallback((event: SyntheticEvent<HTMLAnchorElement>) => {
      if (!disabled) {
        onBlur(event);
      }
    }, [disabled, onBlur]);

    return (
      <a
        ref={anchorRef}
        className={cn('Anchor', {
          'Anchor--active': active,
          'Anchor--disabled': disabled,
        })}
        download={download}
        href={href}
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
        ping={ping}
        rel={rel}
        target={target}
        title={title}
      >
        {children}
      </a>
    );
  },
);
