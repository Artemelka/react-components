import React, { memo } from 'react';
import { List, ListItem } from '../../../_story-components';

export const HeaderActionsDescription = memo(() => (
  <>
    <p>
      Если вам нужны дополнительные кнопки на панели, то не стоит передавать customPanel,
      достаточно передать объект параметров для кнопок параметром headerActions.
      Чтобы не нарушать HTML семантику панель перестанет быть кликабельной и
      для ее открытия появится кнопка.
    </p>
    <p>Параметры headerActions:</p>
    <List>
      <ListItem>
        openIcon - иконка кнопки открытия панели,
      </ListItem>
      <ListItem>
        closeIcon - иконка кнопки закрытия панели,
      </ListItem>
      <ListItem>
        actionsConfig - массив параметров кнопок.
      </ListItem>
    </List>
  </>
));
