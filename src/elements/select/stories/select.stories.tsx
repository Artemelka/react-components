import React, { SyntheticEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  select,
  number,
} from '@storybook/addon-knobs';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import {
  CustomDropdownItemProps,
  DropdownItemParams,
  DropdownMultiItem,
  Select,
  SelectChangeEvent,
  ValuesFormatterType,
} from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
  StoriesItem,
} from '../../../_story-components';
import {
  CustomDropdownItemDescription,
} from '../../dropdown-list/stories/_components/custom-dropdown-item-description';
import { IntroComponent } from './_components/intro-component';

type ChildrenProps ={
  onChange: (selectEvent: SelectChangeEvent) => void;
  state: Record<string, Array<DropdownItemParams>>;
};
type SelectControllerProps = {
  children: (props: ChildrenProps) => JSX.Element;
};

const NUMBER_OPTIONS = {
  range: true,
  min: 0,
  max: 2,
  step: 1,
};
const SELECT_SIZE = [undefined, 'big', 'medium', 'small'];
const SELECT_VARIANTS = [undefined, 'base', 'filled', 'only-text'];
const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary'];
const INITIAL_VALUES = {
  'intro-select': [],
  // state
  'select-disabled': [],
  'select-error': [],
  'intro-select-multi': [],
  'select-placeholder': [],
  'select-values': [{ id: 2, value: 'cut' }],
  'select-values-multi': [{ id: 2, value: 'cut' }, { id: 3, value: 'paste' }],
  // variant
  'select-base': [{ id: 1, value: 'copy' }],
  'select-filled': [{ id: 2, value: 'cut' }],
  'select-only-text': [{ id: 3, value: 'paste' }],
  // size
  'select-big': [{ id: 1, value: 'copy' }],
  'select-big-multi': [{ id: 2, value: 'cut' }, { id: 3, value: 'paste' }],
  'select-medium': [{ id: 2, value: 'cut' }],
  'select-medium-multi': [{ id: 1, value: 'copy' }, { id: 3, value: 'paste' }],
  'select-small': [{ id: 3, value: 'paste' }],
  'select-small-multi': [{ id: 1, value: 'copy' }, { id: 2, value: 'cut' }],
  // themeColor
  'select-accent': [],
  'select-accent-multi': [],
  'select-primary': [],
  'select-primary-multi': [],
  'select-secondary': [],
  'select-secondary-multi': [],
  // customItem
  'select-custom': [],
  'select-custom-multi': [],
  // valuesFormatter
  'select-values-formatter': [],
  'select-values-formatter-multi': [],
  'custom-values-formatter-multi': [],
};

storiesOf('Select', module)
  .addParameters({
    component: Select,
    componentSubtitle: 'Компонент для реализации HTML select',
  })
  .add('Examples', () => {
    const ICON_CONFIG = {
      iconClose: <ArrowDropUp fontSize="inherit" />,
      iconOpen: <ArrowDropDown fontSize="inherit" />,
    };

    const SelectController = (props: SelectControllerProps) => {
      const [state, setState] = useState(INITIAL_VALUES);

      const handleChange = ({ items, name }: SelectChangeEvent) => {
        setState({ ...state, [name]: items });
      };

      return props.children({ onChange: handleChange, state });
    };

    const CustomItem = (props: CustomDropdownItemProps) => {
      const handleKeyDown = (event: SyntheticEvent) => props.onKeyDown({ event });

      return (
        <div>
          <input
            ref={props.itemRef}
            checked={props.selectedItems.some((item) => item.id === props.id)}
            id={`${props.id}`}
            onChange={props.onClick}
            onKeyDown={handleKeyDown}
            type="radio"
          />
          <label htmlFor={`${props.id}`}>{props.value}</label>
        </div>
      );
    };

    const CustomMultiItem = (props: CustomDropdownItemProps) => {
      const handleKeyDown = (event: SyntheticEvent) => props.onKeyDown({ event });

      return (
        <div>
          <input
            ref={props.itemRef}
            checked={props.selectedItems.some((item) => item.id === props.id)}
            id={`${props.id}`}
            onChange={props.onClick}
            onKeyDown={handleKeyDown}
            type="checkbox"
          />
          <label htmlFor={`${props.id}`}>
            {props.extraData
              ? `${props.value} (${props.extraData.data || props.extraData.label})`
              : props.value}
          </label>
        </div>
      );
    };

    const CustomMultiFormatItem = (props: CustomDropdownItemProps) => (
      <DropdownMultiItem {...props} value={props.extraData.label} />
    );

    const valueFormatter: ValuesFormatterType<{ label: string }> = ({
      isMultiSelect,
      values,
    }) => {
      if (isMultiSelect) {
        return values.map(({ extraData: { label = '' } = {} }) => label).join(', ');
      }

      const { extraData = { label: '' } } = values[0];

      return extraData.label;
    };

    return (
      <SelectController>
        {({ onChange, state }: ChildrenProps) => (
          <>
            <IntroComponent />
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell horizontalAlign="center" size={12}>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="intro-select"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    placeholder="Please select value"
                    values={state['intro-select']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>Select state</h2>
            <p>Компонент может иметь различные состояния.</p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>disabled</Highlighter>
                  </h5>
                  <Select
                    disabled
                    iconConfig={ICON_CONFIG}
                    name="select-disabled"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-disabled']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>isError</Highlighter>
                  </h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isError
                    name="select-error"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-error']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>isMultiSelect</Highlighter>
                  </h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="intro-select-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['intro-select-multi']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>placeholder</Highlighter>
                  </h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-placeholder"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    placeholder="Please select value"
                    values={state['select-placeholder']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter isFilled>values</Highlighter>
                  </h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-values"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-values']}
                  />
                </GridCell>
                <GridCell>
                  <h5>
                    <Highlighter color="accent" isFilled>isMultiSelect</Highlighter>
                    &
                    <Highlighter isFilled>values</Highlighter>
                  </h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-values-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-values-multi']}
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
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-base"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-base']}
                  />
                </GridCell>
                <GridCell>
                  <h5>filled</h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-filled"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-filled']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <h5>only-text</h5>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-only-text"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-only-text']}
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
              <h4>big</h4>
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-big"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    size="big"
                    values={state['select-big']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-big-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    size="big"
                    values={state['select-big-multi']}
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h4>medium</h4>
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-medium"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-medium']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-medium-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-medium-multi']}
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h4>small</h4>
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-small"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    size="small"
                    values={state['select-small']}
                    variant="filled"
                  />
                </GridCell>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-small-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    size="small"
                    values={state['select-small-multi']}
                    variant="filled"
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>customItem</Highlighter>
            </h2>
            <CustomDropdownItemDescription />
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <Select
                    customItem={CustomItem}
                    iconConfig={ICON_CONFIG}
                    name="select-custom"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    values={state['select-custom']}
                  />
                </GridCell>
                <GridCell>
                  <Select
                    customItem={CustomMultiItem}
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-custom-multi"
                    onChange={onChange}
                    options={[
                      { extraData: { data: 'high speed' }, id: 1, value: 'wi-fi' },
                      { extraData: { data: '3m' }, id: 2, value: 'pool' },
                      { extraData: { data: '2 auto' }, id: 3, value: 'parking' },
                      { extraData: { data: 'reserve' }, id: 4, value: 'gym' },
                      { extraData: { data: 'video' }, id: 5, value: 'security' },
                    ]}
                    values={state['select-custom-multi']}
                  />
                </GridCell>
              </GridRow>
            </Grid>

            <h2>
              <Highlighter>valuesFormatter</Highlighter>
            </h2>
            <p>Компонент может форматировать отображаемое значение.</p>
            <p>
              В ряде случаев встречается необходимость отображать значение компонента
              отличное от поля value. Например при наличии перевода значений или
              не человекопонятных кодов.
            </p>
            <p>
              Так же, Вы можете форматировать значение в самом списке,
              передавая кастомный компонент списка.
            </p>
            <Grid>
              <GridDivider />
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-values-formatter"
                    onChange={onChange}
                    options={[
                      { extraData: { label: 'Москва' }, id: 111, value: '77' },
                      { extraData: { label: 'Калуга' }, id: 112, value: '40' },
                      { extraData: { label: 'Брянск' }, id: 113, value: '32' },
                      { extraData: { label: 'Санкт-Петербург' }, id: 114, value: '78' },
                      { extraData: { label: 'Ярославль' }, id: 115, value: '76' },
                    ]}
                    values={state['select-values-formatter']}
                    valuesFormatter={valueFormatter}
                  />
                </GridCell>
                <GridCell>
                  <Select
                    customItem={CustomMultiFormatItem}
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-values-formatter-multi"
                    onChange={onChange}
                    options={[
                      { extraData: { label: 'Москва' }, id: 211, value: '77' },
                      { extraData: { label: 'Калуга' }, id: 212, value: '40' },
                      { extraData: { label: 'Брянск' }, id: 213, value: '32' },
                      { extraData: { label: 'Санкт-Петербург' }, id: 214, value: '78' },
                      { extraData: { label: 'Ярославль' }, id: 215, value: '76' },
                    ]}
                    values={state['select-values-formatter-multi']}
                    valuesFormatter={valueFormatter}
                  />
                </GridCell>
                <GridCell>
                  <Select
                    customItem={CustomMultiItem}
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="custom-values-formatter-multi"
                    onChange={onChange}
                    options={[
                      { extraData: { label: 'Москва' }, id: 311, value: '77' },
                      { extraData: { label: 'Калуга' }, id: 312, value: '40' },
                      { extraData: { label: 'Брянск' }, id: 313, value: '32' },
                      { extraData: { label: 'Санкт-Петербург' }, id: 314, value: '78' },
                      { extraData: { label: 'Ярославль' }, id: 315, value: '76' },
                    ]}
                    values={state['custom-values-formatter-multi']}
                    valuesFormatter={valueFormatter}
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
              <h4>accent</h4>
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-accent"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    themeColor="accent"
                    values={state['select-accent']}
                  />
                </GridCell>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-accent-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    themeColor="accent"
                    values={state['select-accent-multi']}
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h4>primary</h4>
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-primary"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    themeColor="primary"
                    values={state['select-primary']}
                  />
                </GridCell>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-primary-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    themeColor="primary"
                    values={state['select-primary-multi']}
                  />
                </GridCell>
              </GridRow>
              <GridDivider />
              <h4>secondary</h4>
              <GridRow>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    name="select-secondary"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    themeColor="secondary"
                    values={state['select-secondary']}
                  />
                </GridCell>
                <GridCell>
                  <Select
                    iconConfig={ICON_CONFIG}
                    isMultiSelect
                    name="select-secondary-multi"
                    onChange={onChange}
                    options={[
                      { id: 1, value: 'copy' },
                      { id: 2, value: 'cut' },
                      { id: 3, value: 'paste' },
                    ]}
                    themeColor="secondary"
                    values={state['select-secondary-multi']}
                  />
                </GridCell>
              </GridRow>
            </Grid>
          </>
        )}
      </SelectController>
    );
  })
  .add('Knobs', () => {
    const OPTIONS = [
      { id: 1, value: 'one' },
      { id: 2, value: 'two' },
      { id: 3, value: 'three' },
    ];

    return (
      <StoriesItem>
        <Select
          disabled={boolean('disabled', false)}
          iconConfig={{
            iconClose: <ArrowDropUp fontSize="inherit" />,
            iconOpen: <ArrowDropDown fontSize="inherit" />,
          }}
          id={text('id', 'selectId')}
          isError={boolean('isError', false)}
          isMultiSelect={boolean('isMultiSelect', false)}
          name={text('name', 'select')}
          onChange={action('onChange')}
          onClick={action('onClick')}
          options={OPTIONS}
          placeholder={text('placeholder', 'Please select value')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', SELECT_SIZE, SELECT_SIZE[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          values={[OPTIONS[number('selectedItems', 1, NUMBER_OPTIONS)]]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', SELECT_VARIANTS, SELECT_VARIANTS[0])}
        />
      </StoriesItem>
    );
  });
