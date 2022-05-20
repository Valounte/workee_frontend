import React, { memo } from 'react';

import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)`
  margin: 16px 0;
  text-align: center;
  text-transform: none;
  fontsize: 15px;
  border-radius: 50px;
  border-color: #213242;
`;
export const Button = memo((props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
});
