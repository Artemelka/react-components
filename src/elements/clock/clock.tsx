import React, { Component } from 'react';
import { ClockView } from './components/clock-view';
import { getTime, getDegreesFromTime, getAlarmDegrees } from './utils';
import { ClockProps, ClockState } from './types';

export class Clock extends Component<ClockProps, ClockState> {
  intervalId: any;

  isAlarmCall = false;

  constructor(props: ClockProps) {
    super(props);

    this.state = this.getInitialState();
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(this.getDegrees(this.props.timeZone));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (this.props.alarmTime && prevProps.alarmTime !== this.props.alarmTime) {
      this.isAlarmCall = false;
      this.setState({
        alarm: getAlarmDegrees({ alarmTime: this.props.alarmTime }),
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getDegrees = (timeZone?: string) => {
    if (this.state) {
      const { alarm, hour } = this.state;
      const { alarmTime, onAlarm = () => false } = this.props;

      if (alarmTime && alarm === hour && !this.isAlarmCall) {
        onAlarm();
        this.isAlarmCall = true;
      }
    }

    return getDegreesFromTime(getTime({ timeZone }));
  };

  getInitialState = (): ClockState => {
    return this.props.alarmTime
      ? {
          ...this.getDegrees(this.props.timeZone),
          alarm: getAlarmDegrees({ alarmTime: this.props.alarmTime }),
        }
      : this.getDegrees(this.props.timeZone);
  };

  render() {
    const { alarm, hour, min, sec } = this.state;
    const { size } = this.props;

    return (
      <ClockView alarm={alarm} hour={hour} min={min} sec={sec} size={size} />
    );
  }
}
