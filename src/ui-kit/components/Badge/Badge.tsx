import React, { memo } from 'react';

import { Badge as MuiBadge, BadgeProps, styled } from '@mui/material';

const StyledBadge = styled(MuiBadge)``;

export const Badge = memo((props: BadgeProps) => {
  const { children, ...otherProps } = props;
  return <StyledBadge {...otherProps}>{children}</StyledBadge>;
});
