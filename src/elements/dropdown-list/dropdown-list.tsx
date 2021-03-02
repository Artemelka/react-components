import React, {
  PureComponent,
  createRef,
  RefObject,
} from 'react';
import { fastClassName } from '../utils';
import { KEY_CODES } from '../constants';
import { DropdownItem } from './_components';
import {
  CustomDropdownItemType,
  DropdownItemParams,
  ItemKeyDownParams,
} from './types';
import style from './dropdown-list.module.scss';

const cn = fastClassName(style);
const CLASS_NAME = 'Dropdown-list';

type DropdownListProps = {
  /** Кастомный компонент элемента списка */
  customItem?: CustomDropdownItemType;
  /** Массив пармаетров для списка */
  items: Array<DropdownItemParams>;
  /** Колбек события клика по элементу списка */
  onClick: (item: DropdownItemParams) => void;
  /** Массив параметров выбраного(ых) элемента(ов) */
  selectedItems?: Array<DropdownItemParams>;
  /** Задает размер компонента */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему списка */
  themeColor?: 'base' | 'accent' | 'primary' | 'secondary';
};

export class DropdownList extends PureComponent<DropdownListProps> {
  refCollections: Array<RefObject<HTMLElement>> = [];

  constructor(props: DropdownListProps) {
    super(props);

    this.refCollections = this.createRefCollections(props.items);
  }

  componentDidMount() {
    this.setFocus();
  }

  componentDidUpdate() {
    this.setFocus();
  }

  setFocus = () => {
    if (this.refCollections.length) {
      if (this.props.selectedItems && this.props.selectedItems.length) {
        this.setSelectedItemFocus();
      } else {
        this.setFirstItemFocus();
      }
    }
  }

  setSelectedItemFocus = () => {
    const { selectedItems = [] } = this.props;
    const targetOption = selectedItems[selectedItems.length - 1];
    const targetIndex = this.props.items.findIndex((item) => item.id === targetOption.id);

    if (this.refCollections[targetIndex].current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.refCollections[targetIndex].current.focus();
    }
  }

  setFirstItemFocus = () => {
    if (this.refCollections[0].current) {
      this.refCollections[0].current.focus();
    }
  }

  getSnapshotBeforeUpdate({ items: prevItems }: DropdownListProps) {
    if (JSON.stringify(this.props.items) !== JSON.stringify(prevItems)) {
      this.refCollections = this.createRefCollections(this.props.items);
    }

    return null;
  }

  setNextItemFocus = (index: number) => {
    const nextIndex = index === this.props.items.length - 1 ? 0 : index + 1;

    if (this.refCollections.length && this.refCollections[nextIndex]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.refCollections[nextIndex].current.focus();
    }
  }

  setPrevItemFocus = (index: number) => {
    const prevIndex = index === 0 ? this.props.items.length - 1 : index - 1;

    if (this.refCollections.length && this.refCollections[prevIndex]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.refCollections[prevIndex].current.focus();
    }
  }

  createRefCollections = (items: Array<DropdownItemParams>): Array<RefObject<HTMLButtonElement>> =>
    items.map(() => createRef<HTMLButtonElement>());

  handleItemKeyDown = ({ index, item, keyCode }: ItemKeyDownParams) => {
    if (keyCode === KEY_CODES.DOWN) {
      this.setNextItemFocus(index);
    }

    if (keyCode === KEY_CODES.UP) {
      this.setPrevItemFocus(index);
    }

    if (keyCode === KEY_CODES.ENTER) {
      this.props.onClick(item);
    }
  };

  render() {
    const {
      customItem,
      selectedItems = [],
      themeColor = 'base',
    } = this.props;

    return (
      <ul
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
        })}
      >
        {this.props.items.map(({ extraData, id, value }, index) => (
          <li
            key={id}
            className={cn(`${CLASS_NAME}__item`, {
              [`${CLASS_NAME}__item--active`]: !customItem && selectedItems.some((el) => el.id === id),
            })}
          >
            <DropdownItem
              customItem={customItem}
              extraData={extraData}
              id={id}
              index={index}
              itemRef={this.refCollections[index]}
              onClick={this.props.onClick}
              onKeyDown={this.handleItemKeyDown}
              selectedItems={selectedItems}
              size={this.props.size}
              themeColor={themeColor}
              value={value}
            />
          </li>
        ))}
      </ul>
    );
  }
}
