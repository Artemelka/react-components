import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Clear from '@material-ui/icons/Clear';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Input } from '@artemelka/react-components';
import { GridRow, GridCell, StoriesItem } from '../../_story-components';
import { IntroComponent } from './_components/intro-component';
import { InputStateDescription } from './_components/input-state-description';
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
        isReadOnly={boolean('isReadOnly', false)}
        name={text('name', 'inputName')}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyPress={action('onKeyPress')}
        placeholder={text('placeholder', PLACEHOLDER_TEXT)}
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
  ))
  .add('Examples', () => {
    const InputStateComponent = (props: any) => {
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
      <InputStateComponent>
        {({
          isVisible,
          state,
          onChange,
          onClear,
          toggleIcon,
        }: any) => (
          <StoriesItem>
            <IntroComponent />
            <h2>Input type</h2>
            <p>Компонент может быть одним из трех типов. (text)</p>
            <GridRow>
              <GridCell>
                <h5>Type: text</h5>
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
                <h5>Type: number</h5>
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
                <h5>Type: password</h5>
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
            <h2>Input state</h2>
            <GridRow>
              <GridCell>
                <h5>Disabled</h5>
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
                <h5>Read only</h5>
                <Input
                  iconConfig={{
                    icon: <Clear fontSize="inherit" />,
                  }}
                  isReadOnly
                  name="input-base-read-only"
                  onChange={onChange}
                  value={state['input-base-read-only']}
                />
              </GridCell>
              <GridCell>
                <h5>Error</h5>
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
                <h5>Non interactive icon</h5>
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
                <h5>With placeholder</h5>
                <Input
                  iconConfig={{
                    icon: <Clear fontSize="inherit" />,
                  }}
                  name="input-base-placeholder"
                  onChange={onChange}
                  placeholder={PLACEHOLDER_TEXT}
                  value={state['input-base-placeholder']}
                />
              </GridCell>
              <InputStateDescription />
            </GridRow>
            <h2>Input variant</h2>
            <p>Компонент имеет три варианта отображения. (base)</p>
            <GridRow>
              <GridCell>
                <h5>Variant: only text</h5>
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
              <GridCell>
                <h5>Variant: base</h5>
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
                <h5>Variant: filled</h5>
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
            </GridRow>
            <h2>Input size</h2>
            <p>Компонент может быть одного из трех размеров. (middle)</p>
            <GridRow>
              <GridCell>
                <h5>Size: big</h5>
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
              <GridCell>
                <h5>Size: medium</h5>
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
              <GridCell>
                <h5>Size: small</h5>
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
              <GridCell>
                <h5>Size: big (filled)</h5>
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
              <GridCell>
                <h5>Size: medium (filled)</h5>
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
              <GridCell>
                <h5>Size: small (filled)</h5>
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
              <GridCell>
                <h5>Size: big (only-text)</h5>
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
              <GridCell>
                <h5>Size: medium (only-text)</h5>
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
              <GridCell>
                <h5>Size: small (only-text)</h5>
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
            <h2>Input theme color</h2>
            <p>Компонент может сменить тему на одну из трех.</p>
            <GridRow>
              <GridCell>
                <h5>Theme color: accent</h5>
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
                <h5>Theme color: secondary</h5>
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
                <h5>Theme color: primary</h5>
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
                <h5>Theme color: accent (filled)</h5>
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
                <h5>Theme color: secondary (filled)</h5>
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
                <h5>Theme color: primary (filled)</h5>
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
                <h5>Theme color: accent (only-text)</h5>
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
              <GridCell>
                <h5>Theme color: secondary (only-text)</h5>
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
              <GridCell>
                <h5>Theme color: primary (only-text)</h5>
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
          </StoriesItem>
        )}
      </InputStateComponent>
    );
  });
