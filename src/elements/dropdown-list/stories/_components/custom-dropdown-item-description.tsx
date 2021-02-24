import React, { memo } from 'react';
import { Highlighter, List, ListItem } from '../../../../_story-components';

export const CustomDropdownItemDescription = memo(() => (
  <>
    <p>Компонент может иметь кастомный компонент списка.</p>
    <p>
      Вы всегда можете передать дополнительную информацию в кастомный компонент,
      используя параметр
      <Highlighter isFilled>extraData</Highlighter>
      в объекте параметров элемента списка.
    </p>
    <p>Ваш кастомный компонент должен принимать параметры:</p>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>id</Highlighter>
        - уникальный идентификатор элемента списка.
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>value</Highlighter>
        - отображаемое значение элемента списка.
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>itemRef</Highlighter>
        - RefObject интерактивного элемента списка (необходим для работы фокусировки).
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>onClick</Highlighter>
        - Колбэк события клика по интерактивному элементу списка
        (необходим для работы выбора элемента).
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>onKeyDown</Highlighter>
        - Колбэк события нажатия клавиши (необходим для корректоной работы фокуса)
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>selectedItems</Highlighter>
        - Массив выбраных элементов списка.
      </ListItem>
    </List>
  </>
));
