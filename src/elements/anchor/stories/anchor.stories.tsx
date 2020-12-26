import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Anchor } from '@artemelka/react-components';

const PROJECT_LINK = 'https://github.com/Artemelka/react-components';

const TARGET_OPTIONS = [undefined, '_blank', '_self', '_parent', '_top'];

storiesOf('Anchor', module)
  .addParameters({
    component: Anchor,
    componentSubtitle: 'Компонент для реализации гиперссылок и псевдоссылок',
  })
  .add('Anchor', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <p style={{ color: 'var(--baseColor)' }}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper,
        nisl in ultricies consectetur, sapien dui vestibulum mauris, ${' '}`}
        <Anchor
          active={boolean('active', false)}
          disabled={boolean('disabled', false)}
          download={boolean('download', false)}
          href={text('href', PROJECT_LINK)}
          id={text('id', 'link')}
          onBlur={action('onBlur')}
          onClick={action('onClick')}
          onFocus={action('onFocus')}
          onKeyPress={action('onKeyPress')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          target={select('target', TARGET_OPTIONS, TARGET_OPTIONS[0])}
          title={text('title', 'link')}
          withPreventedEvent={boolean('withPreventedEvent', true)}
        >
          ссылка на GitHub
        </Anchor>
        {`${' '} vitae sagittis turpis sapien quis felis. Phasellus venenatis accumsan urna nec imperdiet.`}
      </p>
    </StoriesItemWrapper>
  ));
