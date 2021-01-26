import React, { memo } from 'react';
import { Highlighter, List, ListItem } from '../../../_story-components';

export const HeaderActionsDescription = memo(() => (
  <>
    <p>
      Если вам нужны дополнительные кнопки на панели, то не стоит передавать
      <Highlighter isFilled>customPanel</Highlighter>,
      достаточно передать объект параметров для кнопок этим параметром.
    </p>
    <p>
      Чтобы не нарушать HTML семантику панель перестанет быть кликабельной и
      для ее открытия появится кнопка.
    </p>
    <p>Параметры headerActions:</p>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>openIcon</Highlighter>
        - иконка кнопки открытия панели,
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>closeIcon</Highlighter>
        - иконка кнопки закрытия панели,
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>actionsConfig</Highlighter>
        - массив параметров кнопок.
      </ListItem>
    </List>
  </>
));
