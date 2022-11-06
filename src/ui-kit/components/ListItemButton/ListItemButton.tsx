import React, { memo } from 'react';

import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps,
  styled,
} from '@mui/material';

const StyledListItemButton = styled(MuiListItemButton)``;

export const ListItemButton = memo((props: ListItemButtonProps) => {
  const { children, ...otherProps } = props;
  return <StyledListItemButton {...otherProps}>{children}</StyledListItemButton>;
});
