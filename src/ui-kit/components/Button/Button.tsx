import React, { memo } from 'react';

import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)`
  margin: 16px 0;
  text-align: center;
  text-transform: none;
  fontsize: 15px;
  border-radius: 50px;
  border:1px solid #FF7F27;
  background-color: #FF7F27;
  color:white;
  padding:2px 30px;
  &:hover {
    border:1px solid #FF7F27;
    color: #FF7F27;
    background-color:white;
  }
`;
export const Button = memo((props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
});
