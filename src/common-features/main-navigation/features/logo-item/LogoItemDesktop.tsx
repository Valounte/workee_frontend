import React from 'react';

import { ListItem, styled, Tooltip } from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo-small.svg';

const StyledListItem = styled(ListItem)`
  justify-content: center;
`;

export const LogoItemDesktop = () => (
  <StyledListItem divider>
    <Tooltip arrow title="Workee" placement="right">
      <Logo width={40} />
    </Tooltip>
  </StyledListItem>
);
