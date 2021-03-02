import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import {
  Checkbox,
  CheckboxChangeEvent,
} from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  GroupItem,
  Highlighter,
  List,
  ListItem,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';

const CHECKBOX_SIZE = [undefined, 'big', 'medium', 'small'];
const CHECKBOX_VARIANT = [undefined, 'base', 'filled', 'only-text'];
const CHECKBOX_THEME = [undefined, 'base', 'accent', 'primary', 'secondary', 'error'];
const INITIAL_STATE = {
  'checkbox-disabled': true,
  'checkbox-big': true,
  'checkbox-medium': true,
  'checkbox-small': true,
  'checkbox-base': true,
  'checkbox-filled': true,
  'checkbox-only-text': true,
  'checkbox-accent-base': false,
  'checkbox-accent-filled': false,
  'checkbox-accent-only-text': true,
  'checkbox-primary-base': false,
  'checkbox-primary-filled': false,
  'checkbox-primary-only-text': true,
  'checkbox-secondary-base': false,
  'checkbox-secondary-filled': false,
  'checkbox-secondary-only-text': true,
  'checkbox-error-base': false,
  'checkbox-error-filled': false,
  'checkbox-error-only-text': true,
};

storiesOf('Checkbox', module)
  .addParameters({
    component: Checkbox,
    componentSubtitle: 'Компонент для реализации input type=checkbox',
  })
  .add('Examples', () => {
    const CheckboxController = (props: any) => {
      const [state, setState] = useState(INITIAL_STATE);

      const handleChange = ({ name, checked }: CheckboxChangeEvent) => {
        setState({ ...state, [name]: checked });
      };

      return props.children({ state, onChange: handleChange });
    };

    const IntroCheckbox = () => {
      const [firstValue, setFirstValue] = useState(false);
      const [secondValue, setSecondValue] = useState(false);

      const handleFirstClick = ({ checked }: CheckboxChangeEvent) => {
        setFirstValue(checked);
      };

      const handleSecondClick = ({ checked }: CheckboxChangeEvent) => {
        setSecondValue(checked);
      };

      const handleGeneralClick = () => {
        if ((firstValue && !secondValue) || (!firstValue && secondValue)) {
          setFirstValue(true);
          setSecondValue(true);
        } else {
          setFirstValue(!firstValue);
          setSecondValue(!secondValue);
        }
      };

      return (
        <>
          <div>
            <GroupItem>
              <Checkbox
                checked={firstValue || secondValue}
                id="general"
                indeterminate={!(firstValue && secondValue)}
                name="general"
                onChange={handleGeneralClick}
                themeColor="primary"
              />
            </GroupItem>
            <GroupItem>
              <label htmlFor="general">general</label>
            </GroupItem>
          </div>
          <List>
            <ListItem isRow>
              <GroupItem>
                <Checkbox
                  checked={firstValue}
                  id="first"
                  name="first"
                  onChange={handleFirstClick}
                  themeColor="primary"
                />
              </GroupItem>
              <GroupItem>
                <label htmlFor="first">first</label>
              </GroupItem>
            </ListItem>
            <ListItem isRow>
              <GroupItem>
                <Checkbox
                  checked={secondValue}
                  id="second"
                  name="second"
                  onChange={handleSecondClick}
                  themeColor="primary"
                />
              </GroupItem>
              <GroupItem>
                <label htmlFor="second">second</label>
              </GroupItem>
            </ListItem>
          </List>
        </>
      );
    };

    return (
      <CheckboxController>
        {({ state, onChange }: any) => (
          <>
            <IntroComponent />
            <Grid>
              <GridRow>
                <GridCell size={12}>
                  <IntroCheckbox />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>Checkbox state</h2>
            <p>Компонент может иметь различные состояния.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell horizontalAlign="center" size={3}>
                  <h5>
                    <Highlighter color="error" isFilled>checked</Highlighter>
                  </h5>
                  <Checkbox
                    checked={false}
                    id="checkbox-off"
                    name="checkbox-off"
                  />
                </GridCell>
                <GridCell horizontalAlign="center" size={3}>
                  <h5>
                    <Highlighter color="accent" isFilled>checked</Highlighter>
                  </h5>
                  <Checkbox
                    checked
                    id="checkbox-on"
                    name="checkbox-on"
                  />
                </GridCell>
                <GridCell horizontalAlign="center" size={3}>
                  <h5>
                    <Highlighter color="accent" isFilled>indeterminate</Highlighter>
                  </h5>
                  <Checkbox
                    checked
                    id="checkbox-indeterminate"
                    indeterminate
                    name="checkbox-indeterminate"
                  />
                </GridCell>
                <GridCell horizontalAlign="center" size={3}>
                  <h5>
                    <Highlighter color="accent" isFilled>disabled</Highlighter>
                  </h5>
                  <Checkbox
                    checked={state['checkbox-disabled']}
                    disabled
                    id="checkbox-disabled"
                    name="checkbox-disabled"
                    onChange={onChange}
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
                  <Checkbox
                    checked={state['checkbox-big']}
                    id="checkbox-big"
                    name="checkbox-big"
                    onChange={onChange}
                    size="big"
                  />
                </GridCell>
                <GridCell size={3} verticalAlign="between">
                  <h5>medium</h5>
                  <Checkbox
                    checked={state['checkbox-medium']}
                    id="checkbox-medium"
                    name="checkbox-medium"
                    onChange={onChange}
                  />
                </GridCell>
                <GridCell size={3} verticalAlign="between">
                  <h5>small</h5>
                  <Checkbox
                    checked={state['checkbox-small']}
                    id="checkbox-small"
                    name="checkbox-small"
                    onChange={onChange}
                    size="small"
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
                  <Checkbox
                    checked={state['checkbox-base']}
                    id="checkbox-base"
                    name="checkbox-base"
                    onChange={onChange}
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>filled</h5>
                  <Checkbox
                    checked={state['checkbox-filled']}
                    id="checkbox-filled"
                    name="checkbox-filled"
                    onChange={onChange}
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <h5>only-text</h5>
                  <Checkbox
                    checked={state['checkbox-only-text']}
                    id="checkbox-only-text"
                    name="checkbox-only-text"
                    onChange={onChange}
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
                  <Checkbox
                    checked={state['checkbox-accent-base']}
                    id="checkbox-accent-base"
                    name="checkbox-accent-base"
                    onChange={onChange}
                    themeColor="accent"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-accent-filled']}
                    id="checkbox-accent-filled"
                    name="checkbox-accent-filled"
                    onChange={onChange}
                    themeColor="accent"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-accent-only-text']}
                    id="checkbox-accent-only-text"
                    name="checkbox-accent-only-text"
                    onChange={onChange}
                    themeColor="accent"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>primary</h5>
              <GridRow>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-primary-base']}
                    id="checkbox-primary-base"
                    name="checkbox-primary-base"
                    onChange={onChange}
                    themeColor="primary"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-primary-filled']}
                    id="checkbox-primary-filled"
                    name="checkbox-primary-filled"
                    onChange={onChange}
                    themeColor="primary"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-primary-only-text']}
                    id="checkbox-primary-only-text"
                    name="checkbox-primary-only-text"
                    onChange={onChange}
                    themeColor="primary"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>secondary</h5>
              <GridRow>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-secondary-base']}
                    id="checkbox-secondary-base"
                    name="checkbox-secondary-base"
                    onChange={onChange}
                    themeColor="secondary"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-secondary-filled']}
                    id="checkbox-secondary-filled"
                    name="checkbox-secondary-filled"
                    onChange={onChange}
                    themeColor="secondary"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-secondary-only-text']}
                    id="checkbox-secondary-only-text"
                    name="checkbox-secondary-only-text"
                    onChange={onChange}
                    themeColor="secondary"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <h5>error</h5>
              <GridRow>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-error-base']}
                    id="checkbox-error-base"
                    name="checkbox-error-base"
                    onChange={onChange}
                    themeColor="error"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-error-filled']}
                    id="checkbox-error-filled"
                    name="checkbox-error-filled"
                    onChange={onChange}
                    themeColor="error"
                    variant="filled"
                  />
                </GridCell>
                <GridCell size={3}>
                  <Checkbox
                    checked={state['checkbox-error-only-text']}
                    id="checkbox-error-only-text"
                    name="checkbox-error-only-text"
                    onChange={onChange}
                    themeColor="error"
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </CheckboxController>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <Checkbox
        checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
        id={text('id', 'checkboxId')}
        indeterminate={boolean('indeterminate', false)}
        name={text('name', 'checkbox')}
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
