type StylesMap = Record<string, string>;
type GetClassName = (name: string, names?: Record<string, boolean | undefined>) => string;

export function fastClassName(styles: StylesMap): GetClassName {
  return (name, names) => {
    const baseName = styles[name] || name;

    if (names) {
      return Object.keys(names).reduce((acc: string, key) => (
        names[key] ? `${acc} ${styles[key] || key}` : acc
      ), baseName);
    }

    return baseName;
  };
}
