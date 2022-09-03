import React, { memo } from 'react';

import { List as MuiList, ListProps, styled } from '@mui/material';

const StyledList = styled(MuiList)`
  padding: 0;
`;

export const List = memo((props: ListProps) => {
  const { children, ...otherProps } = props;
  return <StyledList {...otherProps}>{children}</StyledList>;
});
