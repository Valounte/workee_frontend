import React, { memo } from 'react';

import { styled, Tabs as MuiTabs, TabsProps } from '@mui/material';

const StyledTabs = styled(MuiTabs)``;

export const Tabs = memo((props: TabsProps) => {
    const { children, ...otherProps } = props;
    return <StyledTabs {...otherProps}>{children}</StyledTabs>;
});
