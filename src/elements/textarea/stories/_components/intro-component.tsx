import React from 'react';
import {
  Intro,
  List,
  ListItem,
  StoriesItem,
} from '../../../_story-components';

export const IntroComponent = () => (
  <StoriesItem>
    <Intro name="Textarea">
      <List>
        <ListItem>Для того, что бы компонент работал,
          ему необходимо передать значения name, value
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
        </ListItem>
      </List>
      <p>
        Все колбэки событий компонента прнимают аргументом объект со значениями name, value, event.
      </p>
      <p>
        Компонент занимает всю ширину родителя.
        Если вам нужно ограничить ширину компонента - создайте обертку с нужной шириной.
      </p>
    </Intro>
  </StoriesItem>
);
