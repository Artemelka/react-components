import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="Button-group">
    <List>
      <ListItem isRow>
        Для работы компонента необходимо передать
        <Highlighter isFilled>buttons</Highlighter>
        - массив параметров для кнопок.
      </ListItem>
      <ListItem isRow>
        Компонент принимает параметр
        <Highlighter isFilled>activeId</Highlighter>.
      </ListItem>
      <ListItem isRow>
        <Highlighter color="error">
          Для корректной работы
          <Highlighter isFilled>activeId</Highlighter>
          необходимо передавать параметр
          <Highlighter isFilled>id</Highlighter>
          для каждой кнопки.
        </Highlighter>
      </ListItem>
    </List>
  </Intro>
));
