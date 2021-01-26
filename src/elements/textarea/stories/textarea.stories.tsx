import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Clear from '@material-ui/icons/Clear';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
  text,
} from '@storybook/addon-knobs';
import {
  Textarea,
  TextareaChangeEvent,
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

const TEXTAREA_SIZE = [undefined, 'small', 'medium', 'big'];
const TEXTAREA_VARIANT = [undefined, 'base', 'filled', 'only-text'];
const TEXTAREA_THEME = [undefined, 'base', 'accent', 'primary', 'secondary'];
const INITIAL_STATE = {
  textarea: 'this is textarea',
  'textarea-disabled': 'disabled value',
  'textarea-read-only': 'read only value',
  'textarea-error': 'error value',
  'textarea-error-message': 'error message value',
  'textarea-max-length': 'max length',
  'textarea-placeholder': '',
  'textarea-base': 'variant base',
  'textarea-filled': 'variant filled',
  'textarea-only-text': 'variant only-text',
  'textarea-row': 'textarea with 3 rows',
  'textarea-row-10': 'textarea with 10 rows',
  'textarea-row-15': 'textarea with 15 rows',
  'textarea-base-small': 'size small base',
  'textarea-base-medium': 'size medium base',
  'textarea-base-big': 'size big base',
  'textarea-filled-small': 'size small filled',
  'textarea-filled-medium': 'size medium filled',
  'textarea-filled-big': 'size big filled',
  'textarea-only-text-small': 'size small only-text',
  'textarea-only-text-medium': 'size medium only-text',
  'textarea-only-text-big': 'size big only-text',
  'textarea-accent': 'theme accent',
  'textarea-accent-filled': 'theme accent filled',
  'textarea-accent-only-text': 'theme accent only-text',
  'textarea-primary': 'theme primary',
  'textarea-primary-filled': 'theme primary filled',
  'textarea-primary-only-text': 'theme primary only-text',
  'textarea-secondary': 'theme secondary',
  'textarea-secondary-filled': 'theme secondary filled',
  'textarea-secondary-only-text': 'theme secondary only-text',

};

storiesOf('Textarea', module)
  .addParameters({
    component: Textarea,
    componentSubtitle: 'Компонент для отображения стилизованного текста',
  })
  .add('Examples', () => {
    const TextareaController = (props: any) => {
      const [state, setState] = useState(INITIAL_STATE);

      const handleChange = ({ name, value: textareaValue }: TextareaChangeEvent) => {
        setState({ ...state, [name]: textareaValue });
      };

      return props.children({ state, onChange: handleChange });
    };

    return (
      <TextareaController>
        {({ state, onChange }: any) => (
          <>
            <IntroComponent />
            <Grid>
              <GridRow>
                <GridCell size={12}>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea"
                    onChange={onChange}
                    value={state.textarea}
                  />
                </GridCell>
              </GridRow>
            </Grid>
            <h2>Textarea state</h2>
            <p>Компонент может иметь различные состояния.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>disabled</Highlighter>
                  </h5>
                  <Textarea
                    disabled
                    name="textarea-disabled"
                    onChange={onChange}
                    value={state['textarea-disabled']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>readOnly</Highlighter>
                  </h5>
                  <Textarea
                    name="textarea-read-only"
                    onChange={onChange}
                    readOnly
                    value={state['textarea-read-only']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>placeholder</Highlighter>
                  </h5>
                  <Textarea
                    name="textarea-placeholder"
                    onChange={onChange}
                    placeholder="Enter value"
                    value={state['textarea-placeholder']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>maxlength</Highlighter>
                  </h5>
                  <Textarea
                    maxlength={10}
                    name="textarea-max-length"
                    onChange={onChange}
                    value={state['textarea-max-length']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>error</Highlighter>
                  </h5>
                  <Textarea
                    error
                    name="textarea-error"
                    onChange={onChange}
                    value={state['textarea-error']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>error</Highlighter>
                    with
                    <Highlighter isFilled>errorMessage</Highlighter>
                  </h5>
                  <Textarea
                    error
                    errorMessage="error message"
                    name="textarea-error-message"
                    onChange={onChange}
                    value={state['textarea-error-message']}
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
                  <Textarea
                    name="textarea-base"
                    onChange={onChange}
                    value={state['textarea-base']}
                  />
                </GridCell>
                <GridCell>
                  <h5>filled</h5>
                  <Textarea
                    name="textarea-filled"
                    onChange={onChange}
                    value={state['textarea-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <h5>only-text</h5>
                  <Textarea
                    name="textarea-only-text"
                    onChange={onChange}
                    value={state['textarea-only-text']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>rows</Highlighter>
            </h2>
            <p>Компоненту можно задать количество видимых строк.</p>
            <Grid>
              <GridRow>
                <GridCell>
                  <h5>rows = 3</h5>
                  <Textarea
                    name="textarea-row"
                    onChange={onChange}
                    rows={3}
                    value={state['textarea-row']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <h5>rows = 10</h5>
                  <Textarea
                    name="textarea-row-10"
                    onChange={onChange}
                    rows={10}
                    value={state['textarea-row-10']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <h5>rows = 15</h5>
                  <Textarea
                    name="textarea-row-15"
                    onChange={onChange}
                    rows={15}
                    value={state['textarea-row-15']}
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
              <GridRow>
                <GridCell verticalAlign="between">
                  <h5>big</h5>
                  <Textarea
                    name="textarea-base-big"
                    onChange={onChange}
                    size="big"
                    value={state['textarea-base-big']}
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>medium</h5>
                  <Textarea
                    name="textarea-base-medium"
                    onChange={onChange}
                    value={state['textarea-base-medium']}
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>small</h5>
                  <Textarea
                    name="textarea-base-small"
                    onChange={onChange}
                    size="small"
                    value={state['textarea-base-small']}
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <GridRow>
                <GridCell verticalAlign="between">
                  <h5>big</h5>
                  <Textarea
                    name="textarea-filled-big"
                    onChange={onChange}
                    size="big"
                    value={state['textarea-filled-big']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>medium</h5>
                  <Textarea
                    name="textarea-filled-medium"
                    onChange={onChange}
                    value={state['textarea-filled-medium']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>small</h5>
                  <Textarea
                    name="textarea-filled-small"
                    onChange={onChange}
                    size="small"
                    value={state['textarea-filled-small']}
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <GridRow>
                <GridCell verticalAlign="between">
                  <h5>big</h5>
                  <Textarea
                    name="textarea-only-text-big"
                    onChange={onChange}
                    size="big"
                    value={state['textarea-only-text-big']}
                    variant="only-text"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>medium</h5>
                  <Textarea
                    name="textarea-only-text-medium"
                    onChange={onChange}
                    value={state['textarea-only-text-medium']}
                    variant="only-text"
                  />
                </GridCell>
                <GridCell verticalAlign="between">
                  <h5>small</h5>
                  <Textarea
                    name="textarea-only-text-small"
                    onChange={onChange}
                    size="small"
                    value={state['textarea-only-text-small']}
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
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-accent"
                    onChange={onChange}
                    themeColor="accent"
                    value={state['textarea-accent']}
                  />
                </GridCell>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-accent-filled"
                    onChange={onChange}
                    themeColor="accent"
                    value={state['textarea-accent-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-accent-only-text"
                    onChange={onChange}
                    themeColor="accent"
                    value={state['textarea-accent-only-text']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>primary</h5>
              <GridRow>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-primary"
                    onChange={onChange}
                    themeColor="primary"
                    value={state['textarea-primary']}
                  />
                </GridCell>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-primary-filled"
                    onChange={onChange}
                    themeColor="primary"
                    value={state['textarea-primary-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-primary-only-text"
                    onChange={onChange}
                    themeColor="primary"
                    value={state['textarea-primary-only-text']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h5>secondary</h5>
              <GridRow>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-secondary"
                    onChange={onChange}
                    themeColor="secondary"
                    value={state['textarea-secondary']}
                  />
                </GridCell>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-secondary-filled"
                    onChange={onChange}
                    themeColor="secondary"
                    value={state['textarea-secondary-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Textarea
                    iconConfig={{
                      icon: <Clear fontSize="inherit" />,
                      onClick: () => false,
                    }}
                    name="textarea-secondary-only-text"
                    onChange={onChange}
                    themeColor="secondary"
                    value={state['textarea-secondary-only-text']}
                    variant="only-text"
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </TextareaController>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <Textarea
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        errorMessage={text('errorMessage', 'error')}
        iconConfig={{
          icon: <Clear fontSize="inherit" />,
          onClick: () => false,
        }}
        id={text('id', 'textareaId')}
        maxlength={number('maxlength', 10)}
        name={text('name', 'textarea')}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onKeyDown={action('onKeyDown')}
        onKeyPress={action('onKeyPress')}
        onKeyUp={action('onKeyUp')}
        placeholder={text('placeholder', 'Enter value')}
        readOnly={boolean('readonly', false)}
        rows={number('rows', 5)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        size={select('size', TEXTAREA_SIZE, TEXTAREA_SIZE[0])}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', TEXTAREA_THEME, TEXTAREA_THEME[0])}
        value={text('value', '')}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        variant={select('variant', TEXTAREA_VARIANT, TEXTAREA_VARIANT[0])}
      />
      <p>блок контроля высоты</p>
    </StoriesItem>
  ));
