import '@storybook/addon-links/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-docs/register';
import '@storybook/addon-knobs/register';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
    theme: {
        ...themes.dark,
          brandTitle: 'Artemelka React components',
        // brandTitle: `Artemelka React components ${process.env.VERSION}`,
          fontBase: '"Jura", sans-serif',
    },
    panelPosition: 'right',
    sidebarAnimations: true,
    isToolshown: true,
    selectedPanel: 'storybook/a11y/panel'
});
