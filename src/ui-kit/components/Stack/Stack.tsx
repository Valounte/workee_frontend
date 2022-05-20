import React, { memo } from 'react';

import { Stack as MuiStack, StackProps, styled } from '@mui/material';

const StyledStack = styled(MuiStack)``;

export const Stack = memo((props: StackProps) => {
  const { children, ...otherProps } = props;
  return <StyledStack {...otherProps}>{children}</StyledStack>;
});
