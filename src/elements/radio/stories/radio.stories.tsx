import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import {
  Radio,
  RadioChangeEvent,
} from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const RADIO_SIZE = [undefined, 'big', 'medium', 'small'];
const RADIO_VARIANT = [undefined, 'base', 'filled', 'only-text'];
const RADIO_THEME = [undefined, 'base', 'accent', 'primary', 'secondary'];
const INITIAL_STATE = {
  state: '',
  size: '',
  theme: '',
  variant: '',
};

storiesOf('Radio', module)
  .addParameters({
    component: Radio,
    componentSubtitle: 'Компонент для реализации input type=radio',
  })
  .add('Examples', () => {
    const RadioController = (props: any) => {
      const [state, setState] = useState(INITIAL_STATE);

      const handleChange = ({ name, value }: RadioChangeEvent) => {
        setState({ ...state, [name]: value });
      };

      return props.children({ state, onChange: handleChange });
    };

    return (
      <RadioController>
        {({ state, onChange }: any) => (
          <>
            <IntroComponent />

            <h2>Radio state</h2>
            <p>Компонент может иметь различные состояния.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={3}>
                  <h5>checked = false</h5>
                  <Radio
                    checked={false}
                    id="radio-off"
                    name="state"
                    value="radio-off"
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>checked = true</h5>
                  <Radio
                    checked
                    id="radio-on"
                    name="state"
                    value="radio-on"
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>disabled</h5>
                  <Radio
                    checked={state.state}
                    disabled
                    id="radio-off-disabled"
                    name="state"
                    onChange={onChange}
                    value="radio-off-disabled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>disabled</h5>
                  <Radio
                    checked
                    disabled
                    id="radio-on-disabled"
                    name="state"
                    onChange={onChange}
                    value="radio-on-disabled"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>size</Highlighter> (medium)
            </h2>
            <p>Компонент может быть одного из трех размеров.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={3} verticalAlign="between">
                  <h5>big</h5>
                  <Radio
                    checked={state.size === 'big'}
                    id="radio-big"
                    name="size"
                    onChange={onChange}
                    size="big"
                    value="big"
                  />
                </GridCell>
                <GridCell size={3} verticalAlign="between">
                  <h5>medium</h5>
                  <Radio
                    checked={state.size === 'medium'}
                    id="radio-medium"
                    name="size"
                    onChange={onChange}
                    value="medium"
                  />
                </GridCell>
                <GridCell size={3} verticalAlign="between">
                  <h5>small</h5>
                  <Radio
                    checked={state.size === 'small'}
                    id="radio-small"
                    name="size"
                    onChange={onChange}
                    size="small"
                    value="small"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>variant</Highlighter> (base)
            </h2>
            <p>Компонент имеет три варианта отображения.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell size={3}>
                  <h5>base</h5>
                  <Radio
                    checked={state.variant === 'base'}
                    id="radio-base"
                    name="variant"
                    onChange={onChange}
                    value="base"
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>filled</h5>
                  <Radio
                    checked={state.variant === 'filled'}
                    id="radio-filled"
                    name="variant"
                    onChange={onChange}
                    value="filled"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>only-text</h5>
                  <Radio
                    checked={state.variant === 'only-text'}
                    id="radio-only-text"
                    name="variant"
                    onChange={onChange}
                    value="only-text"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>themeColor</Highlighter>
            </h2>
            <p>Компонент может сменить тему на одну из трех.</p>
            <Grid>
              <GridDivider />
              <h5>accent</h5>
              <GridRow>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'accent-base'}
                    id="radio-accent-base"
                    name="theme"
                    onChange={onChange}
                    themeColor="accent"
                    value="accent-base"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'accent-filled'}
                    id="radio-accent-filled"
                    name="theme"
                    onChange={onChange}
                    themeColor="accent"
                    value="accent-filled"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'accent-only-text'}
                    id="radio-accent-only-text"
                    name="theme"
                    onChange={onChange}
                    themeColor="accent"
                    value="accent-only-text"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>primary</h5>
              <GridRow>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'primary-base'}
                    id="radio-primary-base"
                    name="theme"
                    onChange={onChange}
                    themeColor="primary"
                    value="primary-base"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'primary-filled'}
                    id="radio-primary-filled"
                    name="theme"
                    onChange={onChange}
                    themeColor="primary"
                    value="primary-filled"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'primary-only-text'}
                    id="radio-primary-only-text"
                    name="theme"
                    onChange={onChange}
                    themeColor="primary"
                    value="primary-only-text"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>secondary</h5>
              <GridRow>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'secondary-base'}
                    id="radio-secondary-base"
                    name="theme"
                    onChange={onChange}
                    themeColor="secondary"
                    value="secondary-base"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'secondary-filled'}
                    id="radio-secondary-filled"
                    name="theme"
                    onChange={onChange}
                    themeColor="secondary"
                    value="secondary-filled"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Radio
                    checked={state.theme === 'secondary-only-text'}
                    id="radio-secondary-only-text"
                    name="theme"
                    onChange={onChange}
                    themeColor="secondary"
                    value="secondary-only-text"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </RadioController>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <Radio
        checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
        id={text('id', 'radioId')}
        name={text('name', 'radio-name')}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyDown={action('onKeyDown')}
        onKeyPress={action('onKeyPress')}
        onKeyUp={action('onKeyUp')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', RADIO_SIZE, RADIO_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', RADIO_THEME, RADIO_THEME[0])}
        value={text('value', 'radio')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', RADIO_VARIANT, RADIO_VARIANT[0])}
      />
    </StoriesItem>
  ));
