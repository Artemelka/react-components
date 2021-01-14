import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import { Button, Input } from '@artemelka/react-components';

const INPUT_VARIANTS = [undefined, 'base', 'filled', 'only-text'];
const INPUT_TYPE = [undefined, 'text', 'number', 'password'];
const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary', 'success'];
const INPUT_SIZE = [undefined, 'big', 'medium', 'small'];
const AUTOCOMPLETE = [undefined, 'on', 'off'];
const TEST_STYLE = {
  display: 'inline-block',
  fontSize: '0',
  verticalAlign: 'top',
  width: '300px',
};

storiesOf('Input', module)
  .addParameters({
    component: Input,
    componentSubtitle: 'Компонент для реализации полей ввода',
  })
  .add('Input', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <Input
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        autoComplete={select('autoComplete', AUTOCOMPLETE, AUTOCOMPLETE[0])}
        autoFocus={boolean('autoFocus', false)}
        cursorPointer={boolean('cursorPointer', false)}
        disabled={boolean('disabled', false)}
        id={text('id', 'inputId')}
        isError={boolean('isError', false)}
        isReadOnly={boolean('isReadOnly', false)}
        name={text('name', 'inputName')}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyPress={action('onKeyPress')}
        placeholder={text('placeholder', 'Enter value')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', INPUT_SIZE, INPUT_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        type={select('type', INPUT_TYPE, INPUT_TYPE[0])}
        value={text('value', '')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', INPUT_VARIANTS, INPUT_VARIANTS[0])}
      />
    </StoriesItemWrapper>
  ))
  .add('with Icon', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <Input
        disabled={boolean('disabled', false)}
        iconConfig={{
          icon: <Delete fontSize="inherit" />,
          onClick: action('onIconClick'),
        }}
        id={text('id', 'inputIconId')}
        isError={boolean('isError', false)}
        isReadOnly={boolean('isReadOnly', false)}
        name={text('name', 'inputIconName')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        placeholder={text('placeholder', 'Enter value')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', INPUT_SIZE, INPUT_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        type={select('type', INPUT_TYPE, INPUT_TYPE[0])}
        value={text('value', 'value')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', INPUT_VARIANTS, INPUT_VARIANTS[0])}
      />
    </StoriesItemWrapper>
  ))
  .add('With Button', ({ StoriesItemWrapper }: any) => (
    <StoriesItemWrapper>
      <div>
        <div style={TEST_STYLE}>
          <Input
            disabled={boolean('disabled', false)}
            id={text('id', 'inputId')}
            name={text('name', 'inputName')}
            placeholder={text('placeholder', 'Enter value')}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            size={select('size', INPUT_SIZE, INPUT_SIZE[0])}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
            value={text('value', 'value')}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            variant={select('variant', INPUT_VARIANTS, INPUT_VARIANTS[0])}
          />
        </div>
        <div style={TEST_STYLE}>
          <Button
            disabled={boolean('disabled', false)}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            size={select('size', INPUT_SIZE, INPUT_SIZE[0])}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
            value="Click me"
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            variant={select('variant', INPUT_VARIANTS, INPUT_VARIANTS[0])}
          />
        </div>
      </div>
    </StoriesItemWrapper>
  ));
