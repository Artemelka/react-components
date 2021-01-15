import React from 'react';
import {
  StoriesItem,
  List,
  ListItem,
} from '../../../_story-components';
import { DESCRIPTION } from '../constants';

export const IntroComponent = () => (
  <StoriesItem>
    <h1>Input</h1>
    <p>{DESCRIPTION}</p>
    <List>
      <ListItem>Для того, что бы компонент работал,
        ему необходимо передать значение value
        и колбэк OnChange который будет изменять value.
      </ListItem>
      <ListItem>
        Для отображения иконки необходимо передать iconConfig:
        <List>
          <ListItem>icon - отрендеренный компонент иконки.</ListItem>
          <ListItem>
            onClick - колбек события клика по иконке.
          </ListItem>
        </List>
        <p>
          Вы можете не передавать колбэк,
          тогда иконка будет отображена в состоянии disabled.
        </p>
      </ListItem>
    </List>
  </StoriesItem>
);
