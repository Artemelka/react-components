import React, { memo, PropsWithChildren } from 'react';
import { StoriesItem } from '../stories-item/stories-item';

export const Intro = memo(({ children, name }: PropsWithChildren<{ name: string }>) => (
  <StoriesItem>
    <h1>{name}</h1>
    <p>
      Здесь приведены самые популярные виды настроек компонента.
    </p>
    <p>Код страницы Вы можете посмотреть в верхней вкладке Docs.</p>
    <p>
      {`Если Вам нужа более тонкая настройка -
        Вы можете перейти в пункт меню ${name}/Knobs и там эксперементировать.`}
    </p>
    {children}
  </StoriesItem>
));
