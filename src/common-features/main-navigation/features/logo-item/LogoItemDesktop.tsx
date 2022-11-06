import React from 'react';

import { ListItem, styled } from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo-small.svg';

const StyledListItem = styled(ListItem)`
  justify-content: center;
`;

export const LogoItemDesktop = () => (
  <StyledListItem divider>
    <Logo width={40} />
  </StyledListItem>
);
