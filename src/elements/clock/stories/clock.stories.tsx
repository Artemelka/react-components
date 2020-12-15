import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import {
  Clock,
  CLOCK_TIME_ZONES_COLLECTION
} from '@artemelka/react-components';

const wrapStyle: CSSProperties = {
    width: '100%',
    height: '500px',
    backgroundColor: '#413951',
    padding: '50px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const SIZES: ['small', 'medium', 'large'] = ['small', 'medium', 'large'];

storiesOf('Clock', module)
    .addParameters({
        component : Clock,
        componentSubtitle: 'Компонент для отображения часов'
    }).add('Clock', () => (
        <div style={wrapStyle}>
            <Clock
                alarmTime={text('alarmTime', '00:40')}
                onAlarm={action('onAlarm')}
                size={select('size', SIZES, SIZES[0])}
                timeZone={select(
                    'timeZone',
                    CLOCK_TIME_ZONES_COLLECTION,
                    'America/Mazatlan'
                )}
            />
        </div>
))
