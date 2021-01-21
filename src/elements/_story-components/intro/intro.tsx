import React, { memo, PropsWithChildren } from 'react';
import { StoriesItem } from '../stories-item/stories-item';

export const Intro = memo(({ children, name }: PropsWithChildren<{ name: string }>) => (
  <StoriesItem>
    <h1>{name}</h1>
    <p>
      {`Здесь приведены самые популярные примеры использования и виды настроек компонента.
Если Вам нужа более тонкая настройка -
Вы можете перейти в пункт меню ${name}/Knobs и там эксперементировать.`}
    </p>
    {children}
  </StoriesItem>
));
