import React, { memo } from 'react';

import { Menu as MuiMenu, MenuProps, styled } from '@mui/material';

const StyledMenu = styled(MuiMenu)``;

export const Menu = memo((props: MenuProps) => {
  const { children, ...otherProps } = props;
  return <StyledMenu {...otherProps}>{children}</StyledMenu>;
});
