import React, { memo } from 'react';

import { CardContent as MuiCardContent, CardContentProps, styled } from '@mui/material';

const StyledCardContent = styled(MuiCardContent)``;

export const CardContent = memo((props: CardContentProps) => {
  const { children, ...otherProps } = props;
  return <StyledCardContent {...otherProps}>{children}</StyledCardContent>;
});
