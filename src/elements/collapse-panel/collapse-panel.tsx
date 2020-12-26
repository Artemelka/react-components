import React, {
  PureComponent,
  RefObject,
  createRef,
  PropsWithChildren,
} from 'react';
import classNames from 'classnames/bind';
import {
  ButtonAlignText,
  ButtonMouseEvent,
  ButtonSize,
  ButtonThemeColor,
} from '../button/types';
import { CollapseContent, CollapseHeader } from './_components';
import {
  CollapseContentActionsAlign,
  CollapseHeaderActionConfig,
  ContentButtonGroupItem,
} from './types';
import style from './collapse-panel.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Collapse-panel';

export type CollapsePanelProps = PropsWithChildren<{
  /** Задает горизонтальное выравнивание панели */
  alignText?: ButtonAlignText;
  /** Конфиг дополнительных кнопок в контентной области панели */
  contentActions?: Array<ContentButtonGroupItem>;
  /** Задает горизонтальное выравнивание кнопок экшенов в контентной области панели */
  contentActionsAlign?: CollapseContentActionsAlign;
  /** Флаг неактивного состояния панели */
  disabled?: boolean;
  /** Флаг отключает визуальное оформление панели */
  emptyStyle?: boolean;
  /** Конфиг дополнительных кнопок на панели
   * (отключает клик на самой панели, для открытия панели появляется кнопка в левой части)
   * необходимо передать иконки открытия/закрытия */
  headerActions?: CollapseHeaderActionConfig;
  /** Уникальный идентификатор панели (возвращается в onChange) */
  id?: string | number;
  /** Флаг состояния панели (открыта/закрыта) */
  isOpen: boolean;
  /** Колбек события клика */
  onChange?: (panelId?: string | number) => void;
  /** Заголовок панели */
  panelTitle: string;
  /** Задает размер панели */
  size?: ButtonSize;
  /** Задает цветовую тему панели */
  themeColor?: ButtonThemeColor;
}>;

export class CollapsePanel extends PureComponent<CollapsePanelProps> {
  contentRef: RefObject<HTMLDivElement> = createRef();

  panelRef: RefObject<HTMLDivElement> = createRef();

  summaryRef: RefObject<HTMLDivElement> = createRef();

  componentDidMount() {
    this.setPanelHeight();
  }

  componentDidUpdate() {
    this.setPanelHeight();
  }

  setPanelHeight = () => {
    if (this.contentRef.current && this.panelRef.current) {
      let initialHeight = 0;
      const contentHeight = this.contentRef.current.clientHeight;

      if (this.summaryRef.current) {
        initialHeight = this.summaryRef.current.clientHeight;
      }
      const height = this.props.isOpen
        ? initialHeight + contentHeight
        : initialHeight;

      this.panelRef.current.style.height = `${height}px`;
    }
  };

  handleChange = ({ event, id }: ButtonMouseEvent) => {
    const { onChange = () => false } = this.props;

    event.stopPropagation();
    onChange(id);
  };

  render() {
    const {
      headerActions: {
        closeIcon,
        openIcon,
        actionsConfig = [],
      } = {},
      themeColor = 'base',
    } = this.props;

    return (
      <div
        ref={this.panelRef}
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--disabled`]: this.props.disabled,
          [`${CLASS_NAME}--empty`]: this.props.emptyStyle,
          [`${CLASS_NAME}--theme-${themeColor}`]: themeColor,
        })}
      >
        <CollapseHeader
          actionButtons={actionsConfig}
          alignText={this.props.alignText}
          closeOpenIcon={this.props.isOpen ? closeIcon : openIcon}
          disabled={this.props.disabled}
          hasAction={Boolean(this.props.headerActions)}
          headerRef={this.summaryRef}
          id={this.props.id}
          isOpen={this.props.isOpen}
          onOpenClick={this.handleChange}
          size={this.props.size}
          themeColor={themeColor}
          title={this.props.panelTitle}
        />
        <CollapseContent
          actionButtons={this.props.contentActions}
          actionsAlign={this.props.contentActionsAlign}
          contentRef={this.contentRef}
          disabled={this.props.disabled}
          id={this.props.id}
          isClickable={!Boolean(this.props.headerActions)}
          size={this.props.size}
          themeColor={themeColor}
        >
          {this.props.children}
        </CollapseContent>
      </div>
    );
  }
}
