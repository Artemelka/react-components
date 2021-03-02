import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Clear from '@material-ui/icons/Clear';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Input } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';
import {
  AUTOCOMPLETE,
  COMPONENT_TITLE,
  INITIAL_VALUES,
  INPUT_SIZE,
  INPUT_TYPE,
  INPUT_VARIANTS,
  PLACEHOLDER_TEXT,
  THEME_COLOR,
} from './constants';

storiesOf('Input', module)
  .addParameters({
    component: Input,
    componentSubtitle: COMPONENT_TITLE,
  })
  .add('Examples', () => {
    const InputController = (props: any) => {
      const [state, setState] = useState(INITIAL_VALUES);
      const [isVisible, toggleIsVisible] = useState(false);

      const handleChange = ({ name, value }: any) => {
        setState({ ...state, [name]: value });
      };

      const handleClearClick = ({ name }: any) => {
        setState({ ...state, [name]: '' });
      };

      const toggleIcon = () => {
        toggleIsVisible(!isVisible);
      };

      return props.children({
        isVisible,
        state,
        onChange: handleChange,
        onClear: handleClearClick,
        toggleIcon,
      });
    };

    return (
      <InputController>
        {({
          isVisible,
          state,
          onChange,
          onClear,
          toggleIcon,
        }: any) => (
          <>
            <IntroComponent />

            <h2>Input state</h2>
            <p>Компонент может иметь различные состояния.</p>
            <p>
              Иконка не отображается при состояниях
              <Highlighter color="accent" isFilled>disabled</Highlighter>
              и
              <Highlighter color="accent" isFilled>readOnly</Highlighter>.
            </p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>disabled</Highlighter>
                  </h5>
                  <Input
                    disabled
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base-disabled"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-base-disabled']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>readOnly</Highlighter>
                  </h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base-read-only"
                    onChange={onChange}
                    readOnly
                    value={state['input-base-read-only']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>isError</Highlighter>
                  </h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    isError
                    name="input-base-error"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-base-error']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>placeholder</Highlighter>
                  </h5>
                  <Input
                    name="input-base-placeholder"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-base-placeholder']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>iconConfig</Highlighter>
                    without
                    <Highlighter isFilled>onClick</Highlighter>
                  </h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                    }}
                    name="input-base-icon"
                    onChange={onChange}
                    value={state['input-base-icon']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>iconConfig</Highlighter>
                    with
                    <Highlighter color="accent" isFilled>alwaysVisible</Highlighter>
                  </h5>
                  <Input
                    iconConfig={{
                      alwaysVisible: true,
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base-always-visible"
                    onChange={onChange}
                    value={state['input-base-always-visible']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>type</Highlighter> (text)
            </h2>
            <p>Компонент может быть одним из трех типов.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <h5>text</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-text"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-text']}
                  />
                </GridCell>
                <GridCell>
                  <h5>number</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-number"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    type="number"
                    value={state['input-number']}
                  />
                </GridCell>
                <GridCell>
                  <h5>password</h5>
                  <Input
                    iconConfig={{
                      icon: !isVisible
                        ? <Visibility fontSize="inherit" />
                        : <VisibilityOff fontSize="inherit" />,
                      onClick: toggleIcon,
                    }}
                    name="input-password"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    type={!isVisible ? 'password' : 'text'}
                    value={state['input-password']}
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
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-base']}
                    variant="base"
                  />
                </GridCell>
                <GridCell>
                  <h5>filled</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-filled-base"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-filled-base']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <h5>only-text</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-only-text"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    value={state['input-only-text']}
                    variant="only-text"
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
                <GridCell verticalAlign="between">
                  <h5>big</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-big"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="big"
                    value={state['input-size-big']}
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>medium</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-medium"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="medium"
                    value={state['input-size-medium']}
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>small</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-small"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="small"
                    value={state['input-size-small']}
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <GridRow>
                <GridCell verticalAlign="between">
                  <h5>big</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-big-filled"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="big"
                    value={state['input-size-big-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>medium</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-medium-filled"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="medium"
                    value={state['input-size-medium-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>small</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-small-filled"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="small"
                    value={state['input-size-small-filled']}
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <GridRow>
                <GridCell verticalAlign="between">
                  <h5>big</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-big-only-text"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="big"
                    value={state['input-size-big-only-text']}
                    variant="only-text"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>medium</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-medium-only-text"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="medium"
                    value={state['input-size-medium-only-text']}
                    variant="only-text"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>small</h5>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-size-small-only-text"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    size="small"
                    value={state['input-size-small-only-text']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>themeColor</Highlighter>
            </h2>
            <p>Компонент может сменить тему на одну из трех.</p>
            <GridDivider />
            <Grid>
              <h5>accent</h5>
              <GridRow>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base-accent"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="accent"
                    value={state['input-base-accent']}
                  />
                </GridCell>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-filled-accent"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="accent"
                    value={state['input-filled-accent']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-only-text-accent"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="accent"
                    value={state['input-only-text-accent']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>primary</h5>
              <GridRow>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base-primary"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="primary"
                    value={state['input-base-primary']}
                  />
                </GridCell>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-filled-primary"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="primary"
                    value={state['input-filled-primary']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-only-text-primary"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="primary"
                    value={state['input-only-text-primary']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>secondary</h5>
              <GridRow>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-base-secondary"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="secondary"
                    value={state['input-base-secondary']}
                  />
                </GridCell>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-filled-secondary"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="secondary"
                    value={state['input-filled-secondary']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Input
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: onClear,
                    }}
                    name="input-only-text-secondary"
                    onChange={onChange}
                    placeholder={PLACEHOLDER_TEXT}
                    themeColor="secondary"
                    value={state['input-only-text-secondary']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </InputController>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <Input
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        autoComplete={select('autoComplete', AUTOCOMPLETE, AUTOCOMPLETE[0])}
        autoFocus={boolean('autoFocus', false)}
        cursorPointer={boolean('cursorPointer', false)}
        disabled={boolean('disabled', false)}
        id={text('id', 'inputId')}
        isError={boolean('isError', false)}
        name={text('name', 'inputName')}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyPress={action('onKeyPress')}
        placeholder={text('placeholder', PLACEHOLDER_TEXT)}
        readOnly={boolean('readOnly', false)}
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
    </StoriesItem>
  ));
