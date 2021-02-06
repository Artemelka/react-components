import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Toggle, ToggleChangeEvent } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const CHECKBOX_SIZE = [undefined, 'big', 'medium', 'small'];
const CHECKBOX_VARIANT = [undefined, 'base', 'filled'];
const CHECKBOX_THEME = [undefined, 'base', 'accent', 'primary', 'secondary', 'error'];
const INITIAL_STATE = {
  intro: false,
  disabled: true,
  big: true,
  'big-filled': true,
  medium: true,
  'medium-filled': true,
  small: true,
  'small-filled': true,
  base: true,
  filled: true,
  accent: false,
  'accent-filled': false,
  primary: false,
  'primary-filled': false,
  secondary: false,
  'secondary-filled': false,
  error: false,
  'error-filled': false,
};

storiesOf('Toggle', module)
  .addParameters({
    component: Toggle,
    componentSubtitle: 'Компонент для реализации переключателя типа input type=checkbox',
  })
  .add('Examples', () => {
    const ToggleController = (props: any) => {
      const [state, setState] = useState(INITIAL_STATE);

      const handleChange = ({ name, checked }: ToggleChangeEvent) => {
        setState({ ...state, [name]: checked });
      };

      return props.children({ state, onChange: handleChange });
    };

    return (
      <ToggleController>
        {({ state, onChange }: any) => (
          <>
            <IntroComponent />
            <Grid>
              <GridRow>
                <GridCell horizontalAlign="center" size={12}>
                  <Toggle
                    checked={state.intro}
                    id="toggleIntro"
                    name="intro"
                    onChange={onChange}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>Toggle state</h2>
            <p>Компонент может иметь различные состояния.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>checked</Highlighter>
                    =
                    <Highlighter color="error" isFilled>false</Highlighter>
                  </h5>
                  <Toggle
                    checked={false}
                    id="toggleFalse"
                    name="false"
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>checked</Highlighter>
                    =
                    <Highlighter color="accent" isFilled>true</Highlighter>
                  </h5>
                  <Toggle
                    checked
                    id="toggleTrue"
                    name="true"
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>disabled</Highlighter>
                  </h5>
                  <Toggle
                    checked={state.disabled}
                    disabled
                    id="toggleDisabled"
                    name="disabled"
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
                <GridCell>
                  <h5>base</h5>
                  <Toggle
                    checked={state.base}
                    id="toggleBase"
                    name="base"
                    onChange={onChange}
                  />
                </GridCell>
                <GridCell>
                  <h5>filled</h5>
                  <Toggle
                    checked={state.filled}
                    id="toggleFilled"
                    name="filled"
                    onChange={onChange}
                    variant="filled"
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
              <h5>big</h5>
              <GridRow>
                <GridCell>
                  <Toggle
                    checked={state.big}
                    id="toggleBig"
                    name="big"
                    onChange={onChange}
                    size="big"
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['big-filled']}
                    id="toggleBigFilled"
                    name="big-filled"
                    onChange={onChange}
                    size="big"
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <h5>medium</h5>
              <GridRow>
                <GridCell>
                  <Toggle
                    checked={state.medium}
                    id="toggleMedium"
                    name="medium"
                    onChange={onChange}
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['medium-filled']}
                    id="toggleMediumFilled"
                    name="medium-filled"
                    onChange={onChange}
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <h5>small</h5>
              <GridRow>
                <GridCell>
                  <Toggle
                    checked={state.small}
                    id="toggleSmall"
                    name="small"
                    onChange={onChange}
                    size="small"
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['small-filled']}
                    id="toggleSmallFilled"
                    name="small-filled"
                    onChange={onChange}
                    size="small"
                    variant="filled"
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
                <GridCell>
                  <Toggle
                    checked={state.accent}
                    id="toggleAccent"
                    name="accent"
                    onChange={onChange}
                    themeColor="accent"
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['accent-filled']}
                    id="toggleAccentFilled"
                    name="accent-filled"
                    onChange={onChange}
                    themeColor="accent"
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <h5>primary</h5>
              <GridRow>
                <GridCell>
                  <Toggle
                    checked={state.primary}
                    id="togglePrimary"
                    name="primary"
                    onChange={onChange}
                    themeColor="primary"
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['primary-filled']}
                    id="togglePrimaryFilled"
                    name="primary-filled"
                    onChange={onChange}
                    themeColor="primary"
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <h5>secondary</h5>
              <GridRow>
                <GridCell>
                  <Toggle
                    checked={state.secondary}
                    id="toggleSecondary"
                    name="secondary"
                    onChange={onChange}
                    themeColor="secondary"
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['secondary-filled']}
                    id="toggleSecondaryFilled"
                    name="secondary-filled"
                    onChange={onChange}
                    themeColor="secondary"
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <h5>error</h5>
              <GridRow>
                <GridCell>
                  <Toggle
                    checked={state.error}
                    id="toggleError"
                    name="error"
                    onChange={onChange}
                    themeColor="error"
                  />
                </GridCell>
                <GridCell>
                  <Toggle
                    checked={state['error-filled']}
                    id="toggleErrorFilled"
                    name="error-filled"
                    onChange={onChange}
                    themeColor="error"
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </ToggleController>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <Toggle
        checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
        id={text('id', 'toggleId')}
        name={text('name', 'toggle')}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyDown={action('onKeyDown')}
        onKeyPress={action('onKeyPress')}
        onKeyUp={action('onKeyUp')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', CHECKBOX_SIZE, CHECKBOX_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', CHECKBOX_THEME, CHECKBOX_THEME[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', CHECKBOX_VARIANT, CHECKBOX_VARIANT[0])}
      />
    </StoriesItem>
  ));
