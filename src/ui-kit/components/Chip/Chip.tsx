import React, { memo } from 'react';

import { Chip as MuiChip, ChipProps, styled } from '@mui/material';

const StyledChip = styled(MuiChip)``;
export const Chip = memo((props: ChipProps) => {
  const { children, ...otherProps } = props;
  return <StyledChip {...otherProps}>{children}</StyledChip>;
});
