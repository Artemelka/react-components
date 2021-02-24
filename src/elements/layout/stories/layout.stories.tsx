import React, { PropsWithChildren } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Layout } from '@artemelka/react-components';
import {
  Grid,
  GridCell,
  GridDivider,
  GridRow,
  Highlighter,
} from '../../../_story-components';
import { IntroComponent } from './_components/intro-component';
import {
  createList,
  createLorem,
  StoryAside,
  StoryFooter,
  StoryHeader,
  StoryMain,
} from './_components/story-layout-components';

storiesOf('Layout', module)
  .addParameters({
    component: Layout,
    componentSubtitle: 'Компонент для реализации лэйаута страницы',
  })
  .add('Examples', () => {
    const LayoutWrapper = (props: PropsWithChildren<{ height?: number }>) => (
      <div
        style={{
          boxShadow: '0 0 6px #fff',
          height: `${props.height || 300}px`,
          width: '100%',
        }}
      >
        {props.children}
      </div>
    );

    const PageContent = ({ count }: { count: number}) => (
      <>
        <h2>Page Content</h2>
        {createLorem(count)}
      </>
    );

    const AsideContent = ({ count }: { count: number}) => (
      <div style={{ width: '200px' }}>
        <h2>Aside</h2>
        {createList(count)}
      </div>
    );

    return (
      <>
        <IntroComponent />
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout>
                  <PageContent count={2} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>asideElement</Highlighter>
        </h2>
        <p>Компонент может принимать элемент боковой панели.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout asideElement={<AsideContent count={20} />}>
                  <PageContent count={2} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>isAsideRight</Highlighter>
        </h2>
        <p>Элемент боковой панели может быть спозиционирован справа от контента.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper height={320}>
                <Layout
                  asideElement={<AsideContent count={5} />}
                  isAsideRight
                >
                  <PageContent count={1} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>isAsideSticky</Highlighter>
        </h2>
        <p>Элемент боковой панели может быть sticky</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout
                  asideElement={<AsideContent count={10} />}
                  isAsideSticky
                >
                  <PageContent count={4} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>footerElement</Highlighter>
        </h2>
        <p>Компонент принимает общий элемент footer.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper height={500}>
                <Layout
                  asideElement={<AsideContent count={5} />}
                  footerElement={<StoryFooter count={1} />}
                >
                  <PageContent count={1} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>headerElement</Highlighter>
        </h2>
        <p>Компонент принимает общий элемент header.</p>
        <Grid>
          <GridDivider />
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper height={400}>
                <Layout
                  asideElement={<AsideContent count={5} />}
                  headerElement={<StoryHeader />}
                >
                  <PageContent count={1} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>

        <h2>
          <Highlighter>disabledScroll</Highlighter>
        </h2>
        <p>Компонент может быть без возможности прокрутки контентной области.</p>
        <p>Параметр <Highlighter isFilled>isAsideSticky</Highlighter> не будет работать.</p>
        <Grid>
          <GridRow>
            <GridCell size={12}>
              <LayoutWrapper>
                <Layout disabledScroll>
                  <PageContent count={2} />
                </Layout>
              </LayoutWrapper>
            </GridCell>
          </GridRow>
        </Grid>
      </>
    );
  })
  .add('Knobs', () => (
    <div
      style={{
        boxShadow: '0 0 6px #fff',
        height: '900px',
        width: '100%',
      }}
    >
      <Layout
        asideElement={<StoryAside count={10} />}
        disabledScroll={boolean('disabledScroll', false)}
        footerElement={<StoryFooter count={4} />}
        headerElement={<StoryHeader count={0} />}
        isAsideRight={boolean('isAsideRight', false)}
        isAsideSticky={boolean('isAsideSticky', false)}
      >
        <StoryMain count={5} />
      </Layout>
    </div>
  ));
