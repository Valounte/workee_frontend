import React, { memo } from 'react';

import { Box as MuiBox, BoxProps, styled } from '@mui/material';

const StyledBox = styled(MuiBox)``;

export const Box = memo((props: BoxProps) => {
  const { children, ...otherProps } = props;
  return <StyledBox {...otherProps}>{children}</StyledBox>;
});
