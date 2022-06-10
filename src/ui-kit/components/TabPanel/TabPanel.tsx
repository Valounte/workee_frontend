import React, { memo } from 'react';

import { Box } from '../Box/Box';

interface TabPanelProps {
  children: React.ReactNode;
  index: string;
  value: string;
}

export const TabPanel = memo((props: TabPanelProps) => {
  const { children, value, index } = props;
  if (value === index) {
    return <Box>{children}</Box>;
  }
  return null;
});
