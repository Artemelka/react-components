import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Select">
    <p>Для работы компонента необходимо передать параметры:</p>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>iconConfig</Highlighter>
        - конфиг иконок для открытого и закрытого состояния.
      </ListItem>
      <ListItem>
        <List>
          <ListItem isRow>
            <Highlighter isFilled>iconClose</Highlighter>
            - отрендереная иконка открытого состояния.
          </ListItem>
          <ListItem isRow>
            <Highlighter isFilled>iconOpen</Highlighter>
            - отрендереная иконка закрытого состояния.
          </ListItem>
        </List>
      </ListItem>
    </List>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>name</Highlighter>
        - имя инпута.
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>options</Highlighter>
        - массив параметров для элементов списка.
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>values</Highlighter>
        - Массив параметров выбраного(ых) элемента(ов).
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>onChange</Highlighter>
        - колбек изменения значения инпута.
      </ListItem>
    </List>
    <p>
      Колбэк
      <Highlighter isFilled>onChange</Highlighter>
      принимает аргументом параметры
      <Highlighter isFilled>id</Highlighter>,
      <Highlighter isFilled>items</Highlighter>
      и
      <Highlighter isFilled>name</Highlighter>.
    </p>
    <p>
      <Highlighter color="error">
        Параметр
        <Highlighter isFilled>values</Highlighter>
        принимает Array для возможности реализации мультивыбора.
      </Highlighter>
    </p>
    <p>
      Компонент занимает всю ширину родителя.
      Если вам нужно ограничить ширину компонента - создайте обертку с нужной шириной.
    </p>
  </Intro>
));
