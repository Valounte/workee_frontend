import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';

interface RedirectIfAuthentificatedProps {
  children: JSX.Element;
}
export const AuthentificatedRoute = (props: RedirectIfAuthentificatedProps) => {
  const { children } = props;
  const isAuthentificated = useSelector(selectIsAuthentificated);

  return isAuthentificated ? children : <Navigate to={RoutesEnum.login} />;
};
