import React, { memo } from 'react';

import {
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps,
  styled,
} from '@mui/material';

const StyledDialogContentText = styled(MuiDialogContentText)``;
export const DialogContentText = memo((props: DialogContentTextProps) => {
  const { children, ...otherProps } = props;
  return (
    <StyledDialogContentText {...otherProps}>{children}</StyledDialogContentText>
  );
});
