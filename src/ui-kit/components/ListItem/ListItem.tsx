import React, { memo } from 'react';

import { ListItem as MuiListItem, ListItemProps, styled } from '@mui/material';

const StyledListItem = styled(MuiListItem)`
  padding: 16px 16px;
`;

export const ListItem = memo((props: ListItemProps) => {
  const { children, ...otherProps } = props;
  return <StyledListItem {...otherProps}>{children}</StyledListItem>;
});
