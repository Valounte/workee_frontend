import React, { memo } from 'react';

import { styled, Tab as MuiTab, TabProps } from '@mui/material';

const StyledTab = styled(MuiTab)``;

export const Tab = memo((props: TabProps) => {
    const { children, ...otherProps } = props;
    return <StyledTab {...otherProps}>{children}</StyledTab>;
});
