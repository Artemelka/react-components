import React, { memo, PropsWithChildren } from 'react';
import { StoriesItem } from '../stories-item/stories-item';
import { Highlighter } from '../highlighter/highlighter';

export const Intro = memo(({ children, name }: PropsWithChildren<{ name: string }>) => (
  <StoriesItem>
    <h1>{name}</h1>
    <p>
      Здесь приведены самые популярные виды настроек компонента.
    </p>
    <p>
      Код страницы Вы можете посмотреть в верхней вкладке <Highlighter>Docs</Highlighter>.
    </p>
    <p>
      Если Вам нужа более тонкая настройка -
      Вы можете перейти в пункт меню
      <Highlighter>{` ${name}/Knobs `}</Highlighter>
      и там эксперементировать.
    </p>
    {children}
  </StoriesItem>
));
