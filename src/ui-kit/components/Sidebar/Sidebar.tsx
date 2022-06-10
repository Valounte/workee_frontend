import React, { memo } from 'react';

import { styled, Drawer as MuiDrawer, DrawerProps } from '@mui/material';

const StyledDrawer = styled(MuiDrawer)``;

export const Drawer = memo((props: DrawerProps) => {
    const { children, ...otherProps } = props;
    return <StyledDrawer {...otherProps}>{children}</StyledDrawer>;
});
