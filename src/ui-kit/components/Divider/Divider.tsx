import React, { memo } from 'react';

import { Divider as MuiDivider, DividerProps, styled } from '@mui/material';

const StyledDivider = styled(MuiDivider)``;
export const Divider = memo((props: DividerProps) => {
  const { children, ...otherProps } = props;
  return <StyledDivider {...otherProps}>{children}</StyledDivider>;
});
