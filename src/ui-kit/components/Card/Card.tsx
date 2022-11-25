import React, { memo } from 'react';

import { Card as MuiCard, CardProps, styled } from '@mui/material';

const StyledCard = styled(MuiCard)`
  height: 100%;
`;

export const Card = memo((props: CardProps) => {
  const { children, ...otherProps } = props;
  return <StyledCard {...otherProps}>{children}</StyledCard>;
});
