import React, { memo } from 'react';

import { styled, Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

const StyledTooltip = styled(MuiTooltip)``;

export const Tooltip = memo((props: TooltipProps) => {
  const { children, ...otherProps } = props;
  return <StyledTooltip {...otherProps}>{children}</StyledTooltip>;
});
