import React from 'react';
import {
  Intro,
  List,
  ListItem,
  StoriesItem,
} from '../../../_story-components';

export const IntroComponent = () => (
  <StoriesItem>
    <Intro name="Input">
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
      <p>
        Компонент занимает всю ширину родителя.
        Если вам нужно ограничить ширину компонента - создайте обертку с нужной шириной.
      </p>
    </Intro>
  </StoriesItem>
);
