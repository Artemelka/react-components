type FormattedTimeZone = Record<string, Array<string>>;

export const formatTimeZone = (timeZones: Array<string>): FormattedTimeZone =>
  timeZones.reduce((acc: FormattedTimeZone, zoneName) => {
    const [region, zone]: Array<string> = zoneName.split('/');

    return {
      ...acc,
      [region]: acc[region] ? [...acc[region], zone] : [zone],
    };
  }, {});
