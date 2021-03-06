import React, {
  FocusEvent,
  KeyboardEvent,
  memo,
  MouseEvent,
  ReactElement,
  RefObject,
  useCallback,
  useMemo,
} from 'react';
import { fastClassName } from '../utils';
import { AnchorFocusEvent, AnchorMouseEvent, AnchorKeyboardEvent } from './types';
import style from './anchor.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Anchor';

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
  onBlur?: (linkFocusEvent: AnchorFocusEvent) => void;
  /** Колбек события клика */
  onClick?: (linkMouseEvent: AnchorMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (linkFocusEvent: AnchorFocusEvent) => void;
  /** Колбек события клавиатуры */
  onKeyPress?: (linkKeyboardEvent: AnchorKeyboardEvent) => void;
  /** Список URL-адресов разделенных пробелами
   * (При переходе по ссылке браузер отправляет POST запросы с текстом PING)
   * */
  ping?: string;
  /** Отношение связанного URL как типов ссылок, разделенных пробелами */
  rel?: string;
  /** Указывает, где открыть связанный документ */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Добавляет оформление текста */
  textDecoration?: 'none' | 'line-through' | 'overline' | 'underline' | 'inherit';
  /** Задает цвет ссылки */
  themeColor?: 'base' | 'accent' | 'primary' | 'secondary' | 'success' | 'error';
  /** Определяет заголовок ссылки, который отображается во всплывающей подсказке */
  title?: string;
  /** Формат связанного URL с типом MIME */
  type?: string;
  /** вызывает preventDefault в обработчиках onClick и onKeyPress */
  withPreventedEvent?: boolean;
};

export const Anchor = memo(
  ({
    active = false,
    anchorRef,
    children,
    disabled = false,
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
    textDecoration = 'none',
    themeColor = 'accent',
    title,
    withPreventedEvent = true,
  }: AnchorProps) => {
    const isClickable = useMemo(() => !disabled && !active, [active, disabled]);

    const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
      if (withPreventedEvent || disabled) {
        event.preventDefault();
      }

      if (isClickable) {
        onClick({ event, href, id });
      }
    }, [disabled, href, id, isClickable, withPreventedEvent, onClick]);

    const handleKeyPress = useCallback((event: KeyboardEvent<HTMLAnchorElement>) => {
      if (withPreventedEvent || disabled) {
        event.preventDefault();
      }

      if (isClickable) {
        onKeyPress({ event, href, id });
      }
    }, [disabled, href, id, isClickable, onKeyPress, withPreventedEvent]);

    const handleFocus = useCallback((event: FocusEvent<HTMLAnchorElement>) => {
      if (isClickable) {
        onFocus({ event, href, id });
      }
    }, [href, id, isClickable, onFocus]);

    const handleBlur = useCallback((event: FocusEvent<HTMLAnchorElement>) => {
      if (isClickable) {
        onBlur({ event, href, id });
      }
    }, [href, id, isClickable, onBlur]);

    return (
      <a
        ref={anchorRef}
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--active`]: active && withPreventedEvent,
          [`${CLASS_NAME}--disabled`]: disabled,
          [`${CLASS_NAME}--decoration-${textDecoration}`]: Boolean(textDecoration),
          [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
        })}
        download={download}
        href={href}
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
        ping={ping}
        rel={rel}
        tabIndex={(active || disabled) ? -1 : 0}
        target={target}
        title={title}
      >
        {children}
      </a>
    );
  },
);
