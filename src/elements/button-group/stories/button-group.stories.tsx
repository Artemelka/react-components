import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {text, select, boolean} from '@storybook/addon-knobs';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Delete from '@material-ui/icons/Delete';
import { ButtonGroup } from '@artemelka/react-components';

const ALIGN_TEXT = ['left', 'center', 'right'];
const BUTTON_SIZES = [undefined, 'big', 'medium', 'small'];
const BUTTON_VARIANTS = [undefined, 'base', 'filled', 'only-text'];
const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary', 'success', 'error'];

storiesOf('ButtonGroup', module)
  .addParameters({
    component: ButtonGroup,
    componentSubtitle: 'Компонент для реализации группы кнопок',
  })
  .add('ButtonGroup', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <StoriesItemWrapper>
        <ButtonGroup
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[2])}
          buttons={[
            {
              disabled: boolean('disabled first', false),
              onClick: action('first onClick'),
              value: text('text first item', 'first'),
            }, {
              disabled: boolean('disabled second', false),
              onClick: action('second onClick'),
              value: text('text second item', 'second'),
            }, {
              disabled: boolean('disabled third', false),
              icon: <Delete fontSize="inherit" />,
              onClick: action('third onClick'),
              value: text('text third item', 'third'),
            }, {
              disabled: boolean('disabled fourth', false),
              onClick: action('fourth onClick'),
              value: text('text fourth item', 'fourth'),
            },
          ]}
          isFullWidth={boolean('isFullWidth', false)}
          isVertical={boolean('isVertical', false)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        />
      </StoriesItemWrapper>
      <StoriesItemWrapper>
        <ButtonGroup
          buttons={[
            {
              disabled: boolean('disabled first', false),
              icon: <ArrowDropDown fontSize="inherit" />,
              onClick: action('first onClick'),
            }, {
              disabled: boolean('disabled second', false),
              icon: <ArrowDropUp fontSize="inherit" />,
              onClick: action('second onClick'),
            }, {
              disabled: boolean('disabled third', false),
              icon: <Delete fontSize="inherit" />,
              onClick: action('third onClick'),
            }, {
              disabled: boolean('disabled fourth', false),
              icon: <Add fontSize="inherit" />,
              onClick: action('fourth onClick'),
            },
          ]}
          isFullWidth={boolean('isFullWidth', false)}
          isOnlyIcons
          isVertical={boolean('isVertical', false)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        />
      </StoriesItemWrapper>
    </StoriesItemWrapper>
  ));
