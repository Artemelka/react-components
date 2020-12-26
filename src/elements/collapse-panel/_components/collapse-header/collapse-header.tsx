import React, { memo, ReactNode, RefObject } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../../button';
import {
  ButtonAlignText,
  ButtonMouseEvent,
  ButtonSize,
  ButtonThemeColor,
} from '../../../button/types';
import { ButtonGroup } from '../../../button-group';
import { ButtonGroupItem } from '../../../button-group/types';
import style from './collapse-header.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Collapse-header';

type CollapseHeaderProps = {
  actionButtons?: Array<ButtonGroupItem>;
  alignText?: ButtonAlignText;
  closeOpenIcon?: ReactNode;
  disabled?: boolean;
  hasAction: boolean;
  headerRef: RefObject<HTMLDivElement>;
  id?: string | number;
  isOpen: boolean;
  onOpenClick: (buttonEvent: ButtonMouseEvent) => void;
  size?: ButtonSize;
  themeColor?: ButtonThemeColor;
  title: string;
};

export const CollapseHeader = memo(({
  actionButtons,
  alignText = 'left',
  closeOpenIcon,
  disabled,
  hasAction,
  headerRef,
  id,
  isOpen,
  onOpenClick,
  size = 'medium',
  themeColor,
  title,
}: CollapseHeaderProps) => (
  <div
    ref={headerRef}
    className={cn(`${CLASS_NAME}`, {
      [`${CLASS_NAME}--clickable`]: !hasAction,
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--opened`]: isOpen,
    })}
  >
    {hasAction && actionButtons ? (
      <>
        <div className={cn(`${CLASS_NAME}__icon`)}>
          <Button
            disabled={disabled}
            icon={closeOpenIcon}
            id={id}
            onClick={onOpenClick}
            size={size}
            themeColor={themeColor}
            variant="base"
          />
        </div>
        <div
          className={cn(`${CLASS_NAME}__content`, {
            [`${CLASS_NAME}__content--size-${size}`]: size,
          })}
        >
          {title}
        </div>
        {!disabled && (
          <div className={cn(`${CLASS_NAME}__action`)}>
            <ButtonGroup
              buttons={actionButtons}
              isOnlyIcons
              size={size}
              themeColor={themeColor}
              variant="base"
            />
          </div>
        )}
      </>
    ) : (
      <Button
        alignText={alignText}
        disabled={disabled}
        id={id}
        isFullWidth
        onClick={onOpenClick}
        size={size}
        themeColor={themeColor}
        value={title}
        variant="only-text"
      />
    )}
  </div>
));
