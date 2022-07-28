import React, { memo } from 'react';

import {
  DialogActions as MuiDialogActions,
  DialogActionsProps,
  styled,
} from '@mui/material';

const StyledDialogActions = styled(MuiDialogActions)``;
export const DialogActions = memo((props: DialogActionsProps) => {
  const { children, ...otherProps } = props;
  return <StyledDialogActions {...otherProps}>{children}</StyledDialogActions>;
});
