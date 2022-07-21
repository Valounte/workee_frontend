import React, { memo } from 'react';

import { AppBar as MuiAppBar, AppBarProps, styled } from '@mui/material';

const StyledAppBar = styled(MuiAppBar)``;
export const AppBar = memo((props: AppBarProps) => {
  const { children, ...otherProps } = props;
  return <StyledAppBar {...otherProps}>{children}</StyledAppBar>;
});
