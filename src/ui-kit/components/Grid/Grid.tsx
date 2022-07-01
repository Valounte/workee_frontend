import React, { memo } from 'react';

import { Grid as MuiGrid, GridProps } from '@mui/material';

export const Grid = memo((props: GridProps) => {
  const { children, ...otherProps } = props;
  return <MuiGrid {...otherProps}>{children}</MuiGrid>;
});
