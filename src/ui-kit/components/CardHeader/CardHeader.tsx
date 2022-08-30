import React, { memo } from 'react';

import { CardHeader as MuiCardHeader, CardHeaderProps, styled } from '@mui/material';

const StyledCardHeader = styled(MuiCardHeader)``;

export const CardHeader = memo((props: CardHeaderProps) => {
  const { children, ...otherProps } = props;
  return <StyledCardHeader {...otherProps}>{children}</StyledCardHeader>;
});
