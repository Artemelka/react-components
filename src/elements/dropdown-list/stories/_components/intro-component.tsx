import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="DropdownList">
    <p>Для работы компонента необходимо передать параметры:</p>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>items</Highlighter>
        - массив параметров для элементов списка.
      </ListItem>
      <ListItem>
        <List>
          <ListItem isRow>
            <Highlighter isFilled>extraData</Highlighter>
            - любые дополнительные данные.
          </ListItem>
          <ListItem isRow>
            <Highlighter isFilled>id</Highlighter>
            - уникальный идентификатор элемента.
          </ListItem>
          <ListItem isRow>
            <Highlighter isFilled>value</Highlighter>
            - отображаемое в списке значение элемента.
          </ListItem>
        </List>
      </ListItem>
    </List>
    <br />
    <List>
      <ListItem isRow>
        <Highlighter isFilled>selectedItems</Highlighter>
        - массив выбранных элементов (идентичен объекту из массива items).
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>onClick</Highlighter>
        - колбэк события клика по элементу списка (принимает аргументом объект параметров элемента).
      </ListItem>
    </List>
  </Intro>
));
