import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Overlay } from '@artemelka/react-components';

const wrapperStyle: CSSProperties = {
  margin: '40px',
  position: 'relative',
  width: '300px',
  height: '300px',
  padding: '30px',
  border: '1px solid #ccc',
};

storiesOf('Overlay', module)
  .addParameters({
    component: Overlay,
    componentSubtitle: 'Компонент для реализации затемнения рабочей области',
  })
  .add('Overlay', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <h2>Перекрытое содержимое рабочей области</h2>
      <div style={wrapperStyle}>
        <h2>Container with position relative</h2>
        <Overlay
          inContainer={boolean('inContainer', false)}
          isLightColor={boolean('isLightColor', false)}
          isTransparent={boolean('isTransparent', false)}
          onOverlayClick={action('onOverlayClick')}
        >
          <p>активный контент</p>
        </Overlay>
      </div>
    </StoriesItemWrapper>
  ));
