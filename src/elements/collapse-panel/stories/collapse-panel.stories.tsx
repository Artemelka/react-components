import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import { CollapsePanel } from '@artemelka/react-components';
import { LOREM, LOREM_RU } from '../../constants';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  StoriesItem,
} from '../../_story-components';
import { IntroComponent } from './_components/intro-component';
import { CustomPanelDescription } from './_components/custom-panel-description';
import { HeaderActionsDescription } from './_components/header-actions-description';

const ALIGN_TEXT = [undefined, 'left', 'center', 'right'];
const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary', 'success', 'error'];
const BUTTON_SIZES = [undefined, 'big', 'medium', 'small'];
const BUTTON_VARIANTS = [undefined, 'base', 'filled', 'only-text'];

storiesOf('CollapsePanel', module)
  .addParameters({
    component: CollapsePanel,
    componentSubtitle: 'Компонент для отображения ????',
  })
  .add('Examples', () => {
    const PanelController = ({ children, open = false }: any) => {
      const [isOpen, toggleOpen] = useState(open);

      const handleOpen = () => toggleOpen(!isOpen);

      return children({ isOpen, onClick: handleOpen });
    };

    return (
      <>
        <IntroComponent />
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>Size (medium)</h2>
        <p>Компонент может быть одного из трех размеров.</p>
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <h5>small</h5>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="it`s small"
                    size="small"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <h5>medium</h5>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="it`s medium"
                    size="medium"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <h5>big</h5>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="it`s big"
                    size="big"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>customPanel</h2>
        <CustomPanelDescription />
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    customPanel={
                      <div>
                        <input id="collapseCheckbox" type="checkbox" />
                        <label htmlFor="collapseCheckbox">Custom panel with Checkbox</label>
                        <br />
                        <button onClick={onClick} type="button">CLICK</button>
                      </div>
                    }
                    isOpen={isOpen}
                    size="big"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>headerActions</h2>
        <HeaderActionsDescription />
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>contentActions</h2>
        <p>В скрытой области панели можно разместить кнопки действий.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <PanelController open>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    contentActions={[
                      {
                        value: 'first',
                      }, {
                        disabled: true,
                        icon: <Delete fontSize="inherit" />,
                        value: 'second',
                      }, {
                        themeColor: 'error',
                        variant: 'filled',
                        value: 'third',
                      }, {
                        themeColor: 'primary',
                        variant: 'base',
                        value: 'fourth',
                      },
                    ]}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>disabled</h2>
        <p>Содержимое скрытой области не попадет в разметку.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    disabled
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't open me"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>Variant (base)</h2>
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <h5>base</h5>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    variant="base"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <h5>filled</h5>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <h5>only text</h5>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>themeColor</h2>
        <p>Компонент может сменить тему на одну из пяти.</p>
        <Grid>
          <h4>accent</h4>
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="accent"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="accent"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="accent"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="accent"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="accent"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="accent"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
          <h4>primary</h4>
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="primary"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="primary"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="primary"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="primary"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="primary"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="primary"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
          <h4>secondary</h4>
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="secondary"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="secondary"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="secondary"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="secondary"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="secondary"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="secondary"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
          <h4>success</h4>
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="success"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="success"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="success"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="success"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="success"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="success"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
          <h4>error</h4>
          <GridRow>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="error"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="error"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="error"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="error"
                    variant="filled"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle={`Click me to ${isOpen ? 'close' : 'open'}`}
                    themeColor="error"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
            <GridCell size={12}>
              <PanelController>
                {({ isOpen, onClick }: any) => (
                  <CollapsePanel
                    headerActions={{
                      openIcon: <ArrowDropDown fontSize="inherit" />,
                      closeIcon: <ArrowDropUp fontSize="inherit" />,
                      actionsConfig: [
                        {
                          icon: <Add fontSize="inherit" />,
                        }, {
                          icon: <Delete fontSize="inherit" />,
                        },
                      ],
                    }}
                    isOpen={isOpen}
                    onClick={onClick}
                    panelTitle="you can't click me"
                    themeColor="error"
                    variant="only-text"
                  >
                    {LOREM}
                  </CollapsePanel>
                )}
              </PanelController>
            </GridCell>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Accordion example', () => {
    const items = [
      {
        id: 1,
        title: 'Panel 1',
        content: LOREM_RU,
      }, {
        id: '2',
        title: 'Panel 2',
        content: LOREM,
      }, {
        id: 3,
        title: 'Panel 3',
        content: LOREM_RU,
      },
    ];

    const Accordion = () => {
      const [openId, setOpenId] = useState(`${items[0].id}`);

      const handleOpen = (panelId?: string | number) => {
        setOpenId(`${panelId}` === openId ? '' : `${panelId}`);
      };

      return (
        <ul>
          {items.map(({ id, title, content }) => (
            <li>
              <CollapsePanel
                id={id}
                isOpen={openId === `${id}`}
                onClick={handleOpen}
                panelTitle={title}
                themeColor="primary"
              >
                {content}
              </CollapsePanel>
            </li>
          ))}
        </ul>
      );
    };

    return <Accordion />;
  })
  .add('Knobs', () => (
    <StoriesItem>
      <StoriesItem>
        <CollapsePanel
          contentActions={[
            {
              onClick: action('content first onClick'),
              value: 'first',
            },
            {
              disabled: true,
              onClick: action('content second onClick'),
              value: 'second',
            },
            {
              onClick: action('content third onClick'),
              themeColor: 'error',
              variant: 'filled',
              value: 'third',
            },
            {
              onClick: action('content fourth onClick'),
              themeColor: 'primary',
              variant: 'base',
              value: 'fourth',
            },
          ]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          contentActionsAlign={select('contentActionsAlign', ALIGN_TEXT, ALIGN_TEXT[0])}
          disabled={boolean('disabled', false)}
          headerActions={{
            openIcon: <ArrowDropDown fontSize="inherit" />,
            closeIcon: <ArrowDropUp fontSize="inherit" />,
            actionsConfig: [
              {
                id: 'Add id',
                icon: <Add fontSize="inherit" />,
                onClick: action('Add onClick'),
              }, {
                id: 'Delete id',
                icon: <Delete fontSize="inherit" />,
                onClick: action('Delete onClick'),
              }, {
                disabled: true,
                icon: <Delete fontSize="inherit" />,
                onClick: action('Delete onClick'),
              },
            ],
          }}
          id={text('id', 'panel id')}
          isOpen={boolean('isOpen', false)}
          onClick={action('onClick')}
          panelTitle={text('panelTitle', 'Panel title')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        >
          {text('children', LOREM)}
        </CollapsePanel>
      </StoriesItem>
      <StoriesItem>
        <CollapsePanel
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[0])}
          disabled={boolean('disabled', false)}
          // emptyStyle={boolean('emptyStyle', false)}
          id={text('id', 'panel id')}
          isOpen={boolean('isOpen', false)}
          onClick={action('onClick')}
          panelTitle={text('panelTitle', 'Panel title')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        >
          {text('children', LOREM)}
        </CollapsePanel>
      </StoriesItem>
      <StoriesItem>
        <CollapsePanel
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          alignText={select('alignText', ALIGN_TEXT, ALIGN_TEXT[0])}
          customPanel={
            <div>
              <input id="collapseCheckbox" type="checkbox" />
              <label htmlFor="collapseCheckbox">Custom panel with Checkbox</label>
              <br />
              <input type="button" value="CLICK" />
            </div>
          }
          disabled={boolean('disabled', false)}
          id={text('id', 'panel id')}
          isOpen={boolean('isOpen', false)}
          onClick={action('onClick')}
          panelTitle={text('panelTitle', 'Panel title')}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          size={select('size', BUTTON_SIZES, BUTTON_SIZES[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          themeColor={select('themeColor', THEME_COLOR, THEME_COLOR[0])}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          variant={select('variant', BUTTON_VARIANTS, BUTTON_VARIANTS[0])}
        >
          {text('children', LOREM)}
        </CollapsePanel>
      </StoriesItem>
    </StoriesItem>
  ));
