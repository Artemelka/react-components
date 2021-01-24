import React from 'react';
import { Intro } from '../../../_story-components';

export const IntroComponent = () => (
  <Intro name="Checkbox">
    <p>
      Для того, что бы компонент работал, ему необходимо передать значения
      checked, id, name и колбэк OnChange который будет изменять checked.
    </p>
    <p>
      Все колбэки событий компонента прнимают аргументом объект со значениями
      checked, event, name.
    </p>
  </Intro>
);
