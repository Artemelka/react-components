import React from 'react';
import {
  Highlighter,
  Intro,
  List,
  ListItem,
} from '../../../_story-components';

export const IntroComponent = () => (
  <Intro name="Input">
    <p>
      Для того, что бы компонент работал, ему необходимо передать значение
      <Highlighter isFilled>value</Highlighter>
      и колбэк
      <Highlighter isFilled>OnChange</Highlighter>
      который будет изменять value.
    </p>
    <p>
      Для отображения иконки необходимо передать
      <Highlighter isFilled>iconConfig</Highlighter>:
    </p>
    <List>
      <ListItem>
        <span>
          <Highlighter isFilled>icon</Highlighter>
        - отрендеренный компонент иконки.
        </span>
        <p>
          Кликабельная иконка отображается только когда передано
          <Highlighter color="error" isFilled>value != пустой строке</Highlighter>.
        </p>
      </ListItem>
      <ListItem>
        <span>
          <Highlighter isFilled>onClick</Highlighter>
        - колбек события клика по иконке.
        </span>
        <p>
          Вы можете не передавать колбэк,
          тогда иконка будет отображаться всегда в состоянии
          <Highlighter color="accent" isFilled>disabled</Highlighter>.
        </p>
      </ListItem>
      <ListItem isRow>
        <Highlighter isFilled>alwaysVisible</Highlighter>
        - флаг для постоянного отображения иконки.
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
