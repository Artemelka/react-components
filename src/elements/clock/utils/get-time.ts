import { ClockTime } from '../types';

type GetTimeParams = {
    timeZone?: string;
    initiatorName?: string;
}
export const getTime = ({ timeZone = 'America/Chicago', initiatorName }: GetTimeParams): ClockTime => {
    const currentDate = new Date().toLocaleString('en-US', { timeZone });
    const day = new Date(currentDate);

    if (initiatorName) {
        console.log('=== getTime ===', initiatorName);
    }

    return {
        hour: day.getHours(),
        min: day.getMinutes(),
        sec: day.getSeconds()
    };
};
