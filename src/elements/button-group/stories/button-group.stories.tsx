import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import { ButtonGroup } from '@artemelka/react-components';

const BUTTON_SIZES = ['big', 'medium', 'small'];
const BUTTON_VARIANTS = ['base', 'filled', 'only-text'];
const THEME_COLOR = ['main', 'accent', 'primary', 'secondary', 'success', 'error'];

storiesOf('ButtonGroup', module)
  .addParameters({
    component: ButtonGroup,
    componentSubtitle: 'Компонент для реализации группы кнопок',
  })
  .add('ButtonGroup', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <ButtonGroup
        buttons={[
          {
            onClick: action('first onClick'),
            value: text('text first item', 'first'),
          }, {
            disabled: true,
            onClick: action('second onClick'),
            value: text('text second item', 'second'),
          }, {
            icon: <Delete fontSize="inherit" />,
            onClick: action('third onClick'),
            value: text('text third item', 'third'),
          }, {
            onClick: action('fourth onClick'),
            value: text('text fourth item', 'fourth'),
          },
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', BUTTON_SIZES, BUTTON_SIZES[1])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
      />
    </StoriesItemWrapper>
  ));
