import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';

interface RedirectIfNotAuthentificatedProps {
  children: JSX.Element;
}

export const NotAuthentificatedRoute = (
  props: RedirectIfNotAuthentificatedProps
) => {
  const { children } = props;
  const isAuthentificated = useSelector(selectIsAuthentificated);

  return isAuthentificated ? <Navigate to={RoutesEnum.home} /> : children;
};
