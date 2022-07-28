import React, { memo } from 'react';

import { Dialog as MuiDialog, DialogProps, styled } from '@mui/material';

const StyledDialog = styled(MuiDialog)``;
export const Dialog = memo((props: DialogProps) => {
  const { children, ...otherProps } = props;
  return <StyledDialog {...otherProps}>{children}</StyledDialog>;
});
