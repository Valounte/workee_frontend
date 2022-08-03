import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuthentificated } from '@entities/authentification/store/selectors/selectIsAuthentificated.selector';
import { RoutesEnum } from '@entities/RoutesEnum';

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
