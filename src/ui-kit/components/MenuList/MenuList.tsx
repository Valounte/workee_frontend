import React, { memo } from 'react';

import { MenuList as MuiMenuList, MenuListProps, styled } from '@mui/material';

const StyledMenuList = styled(MuiMenuList)``;

export const MenuList = memo((props: MenuListProps) => {
  const { children, ...otherProps } = props;
  return <StyledMenuList {...otherProps}>{children}</StyledMenuList>;
});
