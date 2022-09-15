import React, { memo } from 'react';

import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps,
  styled,
} from '@mui/material';

const StyledListItemIcon = styled(MuiListItemIcon)`
  // justify-content: center;
`;

export const ListItemIcon = memo((props: ListItemIconProps) => {
  const { children, ...otherProps } = props;
  return <StyledListItemIcon {...otherProps}>{children}</StyledListItemIcon>;
});
