import React, { memo } from 'react';

import { styled, Select as MuiSelect, SelectProps } from '@mui/material';

const StyledSelect = styled(MuiSelect)``;

export const Select = memo((props: SelectProps) => {
  const { children, ...otherProps } = props;
  return <StyledSelect {...otherProps}>{children}</StyledSelect>;
});
