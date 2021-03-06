import React, { CSSProperties, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Overlay } from '@artemelka/react-components';
import {
  Grid,
  GridDivider,
  GridCell,
  GridRow,
  Highlighter,
  Intro,
  StoriesItem,
} from '../../_story-components';

const wrapperStyle: CSSProperties = {
  margin: '40px',
  position: 'relative',
  width: '300px',
  height: '300px',
  padding: '30px',
  border: '1px solid #ccc',
};

storiesOf('Overlay', module)
  .addParameters({
    component: Overlay,
    componentSubtitle: 'Компонент для реализации затемнения рабочей области',
  })
  .add('Examples', () => {
    const OverlayController = (props: any) => {
      const [isShow, setIsShow] = useState(false);

      const handleClick = () => setIsShow(!isShow);

      return props.children({ isShow, onClick: handleClick });
    };

    return (
      <>
        <Intro name="Overlay" />
        <h2>
          <Highlighter>onOverlayClick</Highlighter>
        </h2>
        <p>Компонент принимает колбэк события клика.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <OverlayController>
              {({ isShow, onClick }: any) => (
                <GridCell>
                  <button onClick={onClick} type="button">Show overlay</button>
                  {isShow && (
                    <Overlay onOverlayClick={onClick}>
                      Click to hide
                    </Overlay>
                  )}
                </GridCell>
              )}
            </OverlayController>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>isLightColor</Highlighter> (false)
        </h2>
        <p>Компонент может иметь светлый цвет фона.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <OverlayController>
              {({ isShow, onClick }: any) => (
                <GridCell>
                  <button onClick={onClick} type="button">
                    Show light overlay
                  </button>
                  {isShow && (
                    <Overlay isLightColor>
                      <button onClick={onClick} type="button">
                        Click me to hide
                      </button>
                    </Overlay>
                  )}
                </GridCell>
              )}
            </OverlayController>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>isTransparent</Highlighter> (false)
        </h2>
        <p>Компонент может быть с прозрачным фоном.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <OverlayController>
              {({ isShow, onClick }: any) => (
                <GridCell>
                  <button onClick={onClick} type="button">
                    Show transparent overlay
                  </button>
                  {isShow && (
                    <Overlay isTransparent>
                      <button onClick={onClick} type="button">
                        Click me to hide
                      </button>
                    </Overlay>
                  )}
                </GridCell>
              )}
            </OverlayController>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>inContainer</Highlighter> (false)
        </h2>
        <p>Компонент может перекрывать часть разметки.</p>
        <p>Границы задает родитель с position: !== static</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <OverlayController>
              {({ isShow, onClick }: any) => (
                <GridCell>
                  <button onClick={onClick} type="button">
                    {`${isShow ? 'Hide' : 'Show'} overlay in container`}
                  </button>
                  <div style={wrapperStyle}>
                    <p>Container with position relative</p>
                    {isShow && (
                      <Overlay inContainer />
                    )}
                  </div>
                </GridCell>
              )}
            </OverlayController>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Knobs', () => (
    <StoriesItem>
      <h2>Перекрытое содержимое рабочей области</h2>
      <div style={wrapperStyle}>
        <h2>Container with position relative</h2>
        <Overlay
          inContainer={boolean('inContainer', false)}
          isLightColor={boolean('isLightColor', false)}
          isTransparent={boolean('isTransparent', false)}
          onOverlayClick={action('onOverlayClick')}
        >
          <p>активный контент</p>
        </Overlay>
      </div>
    </StoriesItem>
  ));
