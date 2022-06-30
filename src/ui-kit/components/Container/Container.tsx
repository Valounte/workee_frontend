import React, { memo } from 'react';

import { Container as MuiContainer, ContainerProps, styled } from '@mui/material';

const StyledContainer = styled(MuiContainer)``;
export const Container = memo((props: ContainerProps) => {
  const { children, ...otherProps } = props;
  return <StyledContainer {...otherProps}>{children}</StyledContainer>;
});
