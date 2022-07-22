import React, { memo } from 'react';

import { MenuItem as MuiMenuItem, MenuItemProps, styled } from '@mui/material';

const StyledMenuItem = styled(MuiMenuItem)``;

export const MenuItem = memo((props: MenuItemProps) => {
  const { children, ...otherProps } = props;
  return <StyledMenuItem {...otherProps}>{children}</StyledMenuItem>;
});
