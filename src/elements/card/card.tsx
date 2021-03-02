import React, {
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { fastClassName } from '../utils';
import { Button } from '../button';
import { Text } from '../text';
import { ButtonMouseEvent } from '../button/types';
import style from './card.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Card';

type TemplateProps = {
  /** Текст кнопки */
  buttonLabel: string;
  /** Текст содержимого карточки */
  content: string;
  /** уникальный идентификатор (возвращается в onClick) */
  id?: string | number;
  /** Колбэк события клика по кнопке карточки */
  onClick: (buttonEvent: ButtonMouseEvent) => void;
  /** порядковый номер карточки */
  positionIndex: string;
  /** Задает цветовую тему карточки */
  themeColor?: 'base' | 'accent' | 'primary' | 'secondary' | 'error';
  /** Заголовок карточки */
  title: string;
};

export const Card = memo(({
  buttonLabel,
  content,
  id,
  onClick = () => false,
  positionIndex,
  themeColor = 'base',
  title,
}: TemplateProps) => {
  const [isHover, setIsHover] = useState(false);

  const formattedIndex = useMemo(
    () => (positionIndex.length === 1 ? `0${positionIndex}` : positionIndex),
    [positionIndex],
  );

  const formattedContent = useMemo(() => `${content.slice(0, 100)}...`, [content]);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);

  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  return (
    <div
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(`${CLASS_NAME}__decorator`)}>
        <div className={cn(`${CLASS_NAME}__container`)}>
          <span
            className={cn(`${CLASS_NAME}__index`, {
              [`${CLASS_NAME}__index--hover`]: isHover,
            })}
          >
            {formattedIndex}
          </span>
          <div className={cn(`${CLASS_NAME}__title`)}>
            <Text
              fontWeight="bold"
              tagName="h3"
              upper
            >
              {title}
            </Text>
          </div>
          <div className={cn(`${CLASS_NAME}__content`)}>
            <Text tagName="p">{formattedContent}</Text>
          </div>
          {buttonLabel && (
            <div
              className={cn(`${CLASS_NAME}__button`, {
                [`${CLASS_NAME}__button--hover`]: isHover,
              })}
            >
              <Button
                id={id}
                onBlur={handleMouseLeave}
                onClick={onClick}
                onFocus={handleMouseEnter}
                themeColor={themeColor}
                value={buttonLabel}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
