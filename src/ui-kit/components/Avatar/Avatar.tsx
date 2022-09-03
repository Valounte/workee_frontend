import React, { memo } from 'react';

import { Avatar as MuiAvatar, AvatarProps, styled } from '@mui/material';

const StyledAvatar = styled(MuiAvatar)`
  margin-right: 8px;
`;

export const Avatar = memo((props: AvatarProps) => {
  const { children, ...otherProps } = props;
  return <StyledAvatar {...otherProps}>{children}</StyledAvatar>;
});
