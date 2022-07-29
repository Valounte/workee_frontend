import React, { memo } from 'react';

import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps,
  styled,
} from '@mui/material';

const StyledDialogTitle = styled(MuiDialogTitle)``;
export const DialogTitle = memo((props: DialogTitleProps) => {
  const { children, ...otherProps } = props;
  return <StyledDialogTitle {...otherProps}>{children}</StyledDialogTitle>;
});
