export * from './strings';
export * from './date';

export const iconSizesMap: {
  [key: string]: number;
} = {
  default: 100,
  xsmall: 10,
  small: 50,
  medium: 100,
  large: 150,
  xlarge: 200,
};

export const getIconSize = (value: string) => iconSizesMap[value];

const fontSizesMap: {
  [key: string]: number;
} = {
  default: 14,
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 18,
  xlarge: 22,
};

export const getFontSize = (size: string) => fontSizesMap[size];
