import React, { memo } from 'react';

import {
  DialogContent as MuiDialogContent,
  DialogContentProps,
  styled,
} from '@mui/material';

const StyledDialogContent = styled(MuiDialogContent)``;
export const DialogContent = memo((props: DialogContentProps) => {
  const { children, ...otherProps } = props;
  return <StyledDialogContent {...otherProps}>{children}</StyledDialogContent>;
});
