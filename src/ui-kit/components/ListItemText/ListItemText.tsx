import React, { memo } from 'react';

import {
  ListItemText as MuiListItemText,
  ListItemTextProps,
  styled,
} from '@mui/material';

const StyledListItemText = styled(MuiListItemText)``;

export const ListItemText = memo((props: ListItemTextProps) => {
  const { children, ...otherProps } = props;
  return <StyledListItemText {...otherProps}>{children}</StyledListItemText>;
});
