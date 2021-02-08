export const INPUT_STORIES_NAME = 'Input';

export const AUTOCOMPLETE = [undefined, 'on', 'off'];
export const INPUT_SIZE = [undefined, 'big', 'medium', 'small'];
export const INPUT_TYPE = [undefined, 'text', 'number', 'password'];
export const INPUT_VARIANTS = [undefined, 'base', 'filled', 'only-text'];
export const PLACEHOLDER_TEXT = 'Enter value';
export const THEME_COLOR = [undefined, 'base', 'accent', 'primary', 'secondary'];

export const INITIAL_VALUES: Record<string, string> = {
  'input-text': 'qwerty',
  'input-number': '123456',
  'input-password': 'password',
  'input-base-disabled': 'disabled value',
  'input-base-read-only': ' read only value',
  'input-base-icon': '',
  'input-base-placeholder': '',
  'input-base-always-visible': '',
  'input-base-error': 'qwerty error',
  'input-base': 'qwerty',
  'input-filled-base': 'qwerty filled',
  'input-only-text': 'qwerty',
  'input-size-big': 'qwerty',
  'input-size-medium': 'qwerty',
  'input-size-small': 'qwerty',
  'input-size-big-filled': 'qwerty filled',
  'input-size-medium-filled': 'qwerty filled',
  'input-size-small-filled': 'qwerty filled',
  'input-size-big-only-text': 'text',
  'input-size-medium-only-text': 'text',
  'input-size-small-only-text': 'text',
  'input-base-accent': 'qwerty color',
  'input-base-secondary': 'qwerty color',
  'input-base-primary': 'qwerty color',
  'input-filled-accent': 'qwerty color',
  'input-filled-secondary': 'qwerty color',
  'input-filled-primary': 'qwerty color',
  'input-only-text-accent': 'qwerty color',
  'input-only-text-secondary': 'qwerty color',
  'input-only-text-primary': 'qwerty color',
};

export const COMPONENT_TITLE = 'Компонент для реализации полей ввода';
