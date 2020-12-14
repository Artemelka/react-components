import React from 'react';
import classNames from 'classnames/bind';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Anchor } from '@artemelka/react-components';
import style from './custom-anchor.module.scss';

const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';

storiesOf('Anchor', module)
  .addParameters({
    component: Anchor,
    componentSubtitle: 'Компонент для реализации гиперссылок и псевдоссылок',
  })
  .add('Anchor', () => {
    const cn = classNames.bind(style);
    const getAnchorClassName = ({
      active,
      disabled,
    }: Record<string, boolean>) =>
      cn('Link', {
        'Link--active': active,
        'Link--disabled': disabled,
      });

    return (
      <>
        <Anchor
          active={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
          href={PROJECT_LINK}
          newPage
          onClick={action('newPage-link-click')}
        >
          ссылка на GitHub откроется в новом окне
        </Anchor>
        <Anchor
          active={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
          onClick={action('link-click')}
        >
          псевдо-ссылка
        </Anchor>
        <Anchor
          active={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
          href={PROJECT_LINK}
          onClick={action('active-link-click')}
        >
          ссылка c props href & onClick без newPage
        </Anchor>
        <h2>Компонент принимает кастомные стили</h2>
        <Anchor
          active={boolean('Active', false)}
          disabled={boolean('Disabled', false)}
          href={PROJECT_LINK}
          setCustomClassName={getAnchorClassName}
        >
          ссылка c кастомными стилями
        </Anchor>
      </>
    );
  });
