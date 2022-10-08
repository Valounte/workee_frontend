import React, { memo } from 'react';

import {
  CardActions as MuiCardActions,
  CardActionsProps,
  styled,
} from '@mui/material';

const StyledCardActions = styled(MuiCardActions)``;

export const CardActions = memo((props: CardActionsProps) => {
  const { children, ...otherProps } = props;
  return <StyledCardActions {...otherProps}>{children}</StyledCardActions>;
});
