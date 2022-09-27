import React, { ReactNode } from 'react';

import { PageLayout } from '$/components/PageLayout';

export const Layout = ({ children }: { children: ReactNode }) => (
  <PageLayout>{children}</PageLayout>
);
