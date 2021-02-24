import React, { memo } from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../../_story-components';

export const IntroComponent = memo(() => (
  <Intro name="CollapsePanel">
    <p>Для работы компонента необходимо передать параметры:</p>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>panelTitle</Highlighter>
        - заголовок панели,
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>isOpen</Highlighter>
        - флаг состояния открыта/закрыта,
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>onClick</Highlighter>
        - колбэк события клика по панели,
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>children</Highlighter>
        - содержимое раскрывающейся области панели.
      </ListItem>
    </List>
  </Intro>
));
