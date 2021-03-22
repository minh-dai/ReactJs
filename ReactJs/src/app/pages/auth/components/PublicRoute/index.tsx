/**
 *
 * PublicRoute
 *
 */

import { type } from 'os';
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

type Props = RouteProps;

export const PublicRoute: React.FC<Props> = (props: Props) => {
  const {} = useAuthContext();
  const condition = true;

  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
