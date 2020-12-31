import React, { memo, ReactNode, RefObject } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../../button';
import {
  ButtonAlignText,
  ButtonMouseEvent,
  ButtonSize,
  ButtonThemeColor,
  ButtonVariant,
} from '../../../button/types';
import { ButtonGroup } from '../../../button-group';
import { ButtonGroupItem } from '../../../button-group/types';
import style from './collapse-header.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Collapse-header';

type CollapseHeaderProps = {
  actionButtons: Array<ButtonGroupItem>;
  alignText?: ButtonAlignText;
  closeOpenIcon?: ReactNode;
  customPanel?: ReactNode;
  disabled?: boolean;
  hasAction: boolean;
  headerRef: RefObject<HTMLDivElement>;
  id?: string | number;
  isOpen: boolean;
  onPanelClick: (buttonEvent: ButtonMouseEvent) => void;
  size?: ButtonSize;
  themeColor?: ButtonThemeColor;
  title: string;
  variant?: ButtonVariant;
};

export const CollapseHeader = memo(({
  actionButtons,
  alignText = 'left',
  closeOpenIcon,
  customPanel,
  disabled,
  hasAction,
  headerRef,
  id,
  isOpen,
  onPanelClick,
  size = 'medium',
  themeColor = 'base',
  title,
  variant = 'base',
}: CollapseHeaderProps) => (
  <div
    ref={headerRef}
    className={cn(`${CLASS_NAME}`, {
      [`${CLASS_NAME}--clickable`]: !hasAction,
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--disabled-filled`]: disabled && variant === 'filled',
      [`${CLASS_NAME}--opened`]: isOpen,
      [`${CLASS_NAME}--theme-${themeColor}`]: themeColor,
      [`${CLASS_NAME}--variant-${variant}`]: variant,
      [`${CLASS_NAME}--variant-${variant}-no-action`]: !hasAction && variant === 'filled',
    })}
  >
    {customPanel && (
      <div className={cn(`${CLASS_NAME}__custom-panel`)}>
        {customPanel}
      </div>
    )}
    {!customPanel && hasAction && (
      <>
        <div className={cn(`${CLASS_NAME}__icon`)}>
          <Button
            disabled={disabled}
            icon={closeOpenIcon}
            id={id}
            onClick={onPanelClick}
            size={size}
            themeColor={themeColor}
            variant={variant}
          />
        </div>
        <div
          className={cn(`${CLASS_NAME}__content`, {
            [`${CLASS_NAME}__content--size-${size}`]: size,
          })}
        >
          {title}
        </div>
        {!disabled && Boolean(actionButtons.length) && (
          <div className={cn(`${CLASS_NAME}__action`)}>
            <ButtonGroup
              buttons={actionButtons}
              isOnlyIcons
              size={size}
              themeColor={themeColor}
              variant={variant}
            />
          </div>
        )}
      </>
    )}
    {!hasAction && !customPanel && (
      <Button
        alignText={alignText}
        disabled={disabled}
        id={id}
        isFullWidth
        onClick={onPanelClick}
        size={size}
        themeColor={themeColor}
        value={title}
        variant={variant === 'base' ? 'only-text' : variant}
      />
    )}
  </div>
));
