import React, { memo } from 'react';

import { styled, Typography as MuiTypography, TypographyProps } from '@mui/material';

const StyledTypography = styled(MuiTypography)`
  white-space: pre-line;
`;

export const Typography = memo((props: TypographyProps) => {
  const { children, ...otherProps } = props;
  return <StyledTypography {...otherProps}>{children}</StyledTypography>;
});
