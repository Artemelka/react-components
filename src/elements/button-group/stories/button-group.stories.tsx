import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Delete from '@material-ui/icons/Delete';
import { ButtonGroup } from '@artemelka/react-components';

const BUTTON_SIZES = [undefined, 'big', 'medium', 'small'];
const BUTTON_VARIANTS = [undefined, 'base', 'filled', 'only-text'];
const THEME_COLOR = [undefined, 'base', 'main', 'accent', 'primary', 'secondary', 'success', 'error'];

storiesOf('ButtonGroup', module)
  .addParameters({
    component: ButtonGroup,
    componentSubtitle: 'Компонент для реализации группы кнопок',
  })
  .add('ButtonGroup', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
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
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        />
      </StoriesItemWrapper>
      <StoriesItemWrapper>
        <ButtonGroup
          buttons={[
            {
              icon: <ArrowDropDown fontSize="inherit" />,
              onClick: action('first onClick'),
            }, {
              disabled: true,
              icon: <ArrowDropUp fontSize="inherit" />,
              onClick: action('second onClick'),
            }, {
              icon: <Delete fontSize="inherit" />,
              onClick: action('third onClick'),
            }, {
              icon: <Add fontSize="inherit" />,
              onClick: action('fourth onClick'),
            },
          ]}
          isOnlyIcons
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        />
      </StoriesItemWrapper>
    </StoriesItemWrapper>
  ));
