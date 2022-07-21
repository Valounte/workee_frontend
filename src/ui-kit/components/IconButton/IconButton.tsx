import React, { memo } from 'react';

import { IconButton as MuiIconButton, IconButtonProps, styled } from '@mui/material';

const StyledIconButton = styled(MuiIconButton)``;
export const IconButton = memo((props: IconButtonProps) => {
  const { children, ...otherProps } = props;
  return <StyledIconButton {...otherProps}>{children}</StyledIconButton>;
});
