import { ReactNode } from 'react';

import { Colors } from '$/styles/themes/theme';
import { typography } from '$/styles/themes/typography';

export type TVariants = keyof typeof typography;

export type TextProps = {
  children: ReactNode;
  tag: keyof JSX.IntrinsicElements;
  variant: TVariants;
  className?: string;
  color?: Colors;
};
