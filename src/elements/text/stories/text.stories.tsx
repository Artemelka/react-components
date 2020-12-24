import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Text } from '@artemelka/react-components';

const ALIGN: Array<string> = ['center', 'left', 'right'];
const TAG_NAMES = ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const FONT_WEIGHT = ['light', 'regular', 'medium', 'semi-bold', 'bold'];

storiesOf('Text', module)
  .addParameters({
    component: Text,
    componentSubtitle: 'Компонент для отображения стилизованного текста',
  })
  .add('Text', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <Text
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        align={select('align', ALIGN, ALIGN[2])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        fontWeight={select('fontSize', FONT_WEIGHT, FONT_WEIGHT[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        tagName={select('tagName', TAG_NAMES, TAG_NAMES[0])}
        upper={boolean('upper', false)}
      >
        Almost before we knew it, we had left the ground.
      </Text>
      <p style={{ color: 'red', marginTop: '80px' }}>
        <Text>Компонент наследует цвет от родителя</Text>
      </p>
    </StoriesItemWrapper>
  ));
