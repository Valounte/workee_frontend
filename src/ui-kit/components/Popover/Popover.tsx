import React, { memo } from 'react';

import { Popover as MuiPopover, PopoverProps, styled } from '@mui/material';

const StyledPopover = styled(MuiPopover)`
  padding: 0;
`;

export const Popover = memo((props: PopoverProps) => {
  const { children, ...otherProps } = props;
  return <StyledPopover {...otherProps}>{children}</StyledPopover>;
});
