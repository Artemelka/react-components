import React, { SyntheticEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, number } from '@storybook/addon-knobs';
import {
  Button,
  CustomDropdownItemProps,
  DropdownList,
  DropdownItemParams,
  DropdownMultiItem,
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
import { CustomDropdownItemDescription } from './_components/custom-dropdown-item-description';

type ChildrenParams = {
  onClick: (item: DropdownItemParams) => void;
  selectedItems?: Array<DropdownItemParams>;
}
type ListControllerProps = {
  children: (params: ChildrenParams) => JSX.Element;
  initialSelectedItems?: Array<DropdownItemParams>;
};

const NUMBER_OPTIONS = {
  range: true,
  min: 1,
  max: 8,
  step: 1,
};
const LIST_THEME = [undefined, 'base', 'accent', 'primary', 'secondary'];

storiesOf('DropdownList', module)
  .addParameters({
    component: DropdownList,
    componentSubtitle: 'Компонент для реализации выпадающего списка',
  })
  .add('Examples', () => {
    const ButtonDropdown = (props: any) => {
      const [isOpen, toggleOpen] = useState(false);

      const handleClick = () => toggleOpen(!isOpen);

      return (
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <Button
            onClick={handleClick}
            value={`${isOpen ? 'hide' : 'show'} dropdown`}
          />
          {isOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 2px)',
                width: '100%',
              }}
            >
              {props.children}
            </div>
          )}
        </div>
      );
    };

    const ListController = (props: ListControllerProps) => {
      const [selectedItems, setSelectedItems] = useState(props.initialSelectedItems);

      const handleClick = (item: DropdownItemParams) => setSelectedItems([item]);

      return props.children({ selectedItems, onClick: handleClick });
    };

    const MultiListController = (props: ListControllerProps) => {
      const [selectedItems, setSelectedItems] = useState(props.initialSelectedItems);

      const getNextState = (item: DropdownItemParams) => {
        if (selectedItems) {
          const isIncludes = selectedItems.some((selectedItem) => selectedItem.id === item.id);

          return isIncludes
            ? selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
            : [...selectedItems, item];
        }

        return [item];
      };

      const handleClick = (item: DropdownItemParams) => {
        setSelectedItems(getNextState(item));
      };

      return props.children({ selectedItems, onClick: handleClick });
    };

    const CustomItem = (props: CustomDropdownItemProps) => {
      const selectedItems = props.selectedItems || [];
      const checked = selectedItems.some((item) => item.id === props.id);

      const handleChange = () => props.onClick();

      const handleKeyDown = (event: SyntheticEvent) => props.onKeyDown({ event });

      return (
        <div>
          <input
            ref={props.itemRef}
            checked={checked}
            id={`${props.id}`}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="radio"
          />
          <label htmlFor={`${props.id}`}>
            {props.extraData
              ? `${props.value} (${props.extraData.data})`
              : props.value}
          </label>
        </div>
      );
    };

    const CustomMultiItem = (props: CustomDropdownItemProps) => {
      const selectedItems = props.selectedItems || [];
      const checked = selectedItems.some((item) => item.id === props.id);

      const handleChange = () => props.onClick();

      const handleKeyDown = (event: SyntheticEvent) => props.onKeyDown({ event });

      return (
        <div>
          <input
            ref={props.itemRef}
            checked={checked}
            id={`${props.id}`}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="checkbox"
          />
          <label htmlFor={`${props.id}`}>{props.value}</label>
        </div>
      );
    };

    return (
      <>
        <IntroComponent />
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell horizontalAlign="center" size={12}>
              <ListController>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      items={[
                        { id: 1, value: 'copy' },
                        { id: 2, value: 'cut' },
                        { id: 3, value: 'paste' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                    />
                  </ButtonDropdown>
                )}
              </ListController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>selectedItems</Highlighter>
        </h2>
        <p>Компонент может быть с изначально выбранным значением.</p>
        <p>
          <Highlighter color="error">
            Параметр принимает Array для возможности реализации мультивыбора.
          </Highlighter>
        </p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell>
              <ListController initialSelectedItems={[{ id: 3, value: 'EN' }]}>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      items={[
                        { id: 1, value: 'RU' },
                        { id: 2, value: 'BY' },
                        { id: 3, value: 'EN' },
                        { id: 4, value: 'PL' },
                        { id: 5, value: 'UA' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                    />
                  </ButtonDropdown>
                )}
              </ListController>
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
              <h5>Custom single select component</h5>
              <ListController>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      customItem={CustomItem}
                      items={[
                        { extraData: { data: 'high speed' }, id: 1, value: 'wi-fi' },
                        { extraData: { data: '3m' }, id: 2, value: 'pool' },
                        { extraData: { data: '2 auto' }, id: 3, value: 'parking' },
                        { extraData: { data: 'reserve' }, id: 4, value: 'gym' },
                        { extraData: { data: 'video' }, id: 5, value: 'security' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                    />
                  </ButtonDropdown>
                )}
              </ListController>
            </GridCell>
            <GridCell>
              <h5>DropdownMultiItem component</h5>
              <MultiListController>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      customItem={DropdownMultiItem}
                      items={[
                        { id: '11', value: 'wi-fi' },
                        { id: '12', value: 'pool' },
                        { id: '13', value: 'parking' },
                        { id: '14', value: 'gym' },
                        { id: '15', value: 'security' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                    />
                  </ButtonDropdown>
                )}
              </MultiListController>
            </GridCell>
            <GridCell>
              <h5>Custom multi select component</h5>
              <MultiListController>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      customItem={CustomMultiItem}
                      items={[
                        { id: 21, value: 'wi-fi' },
                        { id: 22, value: 'pool' },
                        { id: 23, value: 'parking' },
                        { id: 24, value: 'gym' },
                        { id: 25, value: 'security' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                    />
                  </ButtonDropdown>
                )}
              </MultiListController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>themeColor</Highlighter>
        </h2>
        <p>Компонент может сменить тему на одну из трех.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell>
              <h5>accent</h5>
              <ListController>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      items={[
                        { id: 1, value: 'copy' },
                        { id: 2, value: 'cut' },
                        { id: 3, value: 'paste' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                      themeColor="accent"
                    />
                  </ButtonDropdown>
                )}
              </ListController>
            </GridCell>
            <GridCell>
              <h5>primary</h5>
              <ListController initialSelectedItems={[{ id: 2, value: 'cut' }]}>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      items={[
                        { id: 1, value: 'copy' },
                        { id: 2, value: 'cut' },
                        { id: 3, value: 'paste' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                      themeColor="primary"
                    />
                  </ButtonDropdown>
                )}
              </ListController>
            </GridCell>
            <GridCell>
              <h5>secondary</h5>
              <ListController>
                {({ onClick, selectedItems }: ChildrenParams) => (
                  <ButtonDropdown>
                    <DropdownList
                      items={[
                        { id: 1, value: 'copy' },
                        { id: 2, value: 'cut' },
                        { id: 3, value: 'paste' },
                      ]}
                      onClick={onClick}
                      selectedItems={selectedItems}
                      themeColor="secondary"
                    />
                  </ButtonDropdown>
                )}
              </ListController>
            </GridCell>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <DropdownList
        items={[
          { id: 1, value: 'first option' },
          { id: 2, value: 'second option', extraData: { foo: 'bar' } },
          { id: 3, value: 'third option' },
          { id: 4, value: 'four option' },
          { id: 5, value: 'five option' },
          { id: 6, value: 'six option' },
          { id: 7, value: 'seven option' },
          { id: 8, value: 'eight option' },
        ]}
        onClick={action('onClick')}
        selectedItems={[{
          id: number('selectedItems', 6, NUMBER_OPTIONS),
          value: 'five option',
        }]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        themeColor={select('themeColor', LIST_THEME, LIST_THEME[0])}
      />
    </StoriesItem>
  ));
