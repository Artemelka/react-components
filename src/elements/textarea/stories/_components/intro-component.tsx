import React from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../../_story-components';

export const IntroComponent = () => (
  <Intro name="Textarea">
    <p>
      Для того, что бы компонент работал, ему необходимо передать значения
      <Highlighter isFilled>name</Highlighter>,
      <Highlighter isFilled>value</Highlighter>
      и колбэк
      <Highlighter isFilled>OnChange</Highlighter>
      который будет изменять
      <Highlighter isFilled>value</Highlighter>.
    </p>
    <p>
      Для отображения иконки необходимо передать
      <Highlighter isFilled>iconConfig</Highlighter>:
    </p>
    <List>
      <ListItem isRow>
        <Highlighter isFilled>icon</Highlighter>
        - отрендеренный компонент иконки.
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>onClick</Highlighter>
        - колбек события клика по иконке.
      </ListItem>
    </List>
    <p>
      Все колбэки событий компонента прнимают аргументом объект со значениями
      <Highlighter isFilled>event</Highlighter>,
      <Highlighter isFilled>name</Highlighter>,
      <Highlighter isFilled>value</Highlighter>.
    </p>
    <p>
      Компонент занимает всю ширину родителя.
      Если вам нужно ограничить ширину компонента - создайте обертку с нужной шириной.
    </p>
  </Intro>
);
