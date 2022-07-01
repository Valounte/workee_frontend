import React, { memo } from 'react';

import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

export const TextField = memo((props: TextFieldProps) => {
  const { children, ...otherProps } = props;
  return <MuiTextField {...otherProps}>{children}</MuiTextField>;
});
