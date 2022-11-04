import React, { memo } from 'react';

import { Switch as MuiSwitch, SwitchProps, styled } from '@mui/material';

const StyledSwitch = styled(MuiSwitch)``;

export const Switch = memo((props: SwitchProps) => {
  const { ...otherProps } = props;
  return <StyledSwitch {...otherProps}>{}</StyledSwitch>;
});
