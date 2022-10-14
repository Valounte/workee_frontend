import React, { ForwardedRef, forwardRef, memo } from 'react';

import styled from '@emotion/styled';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';

const StyledAppRouterLink = styled(ReactRouterLink)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #3f1d01;
`;
export interface AppRouterLinkProps extends ReactRouterLinkProps {}

export const AppRouterLink = memo(
  forwardRef((props: AppRouterLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <StyledAppRouterLink ref={ref} {...props} />
  ))
);
