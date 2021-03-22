/**
 *
 * ProtectedRoute
 *
 */

import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

type Props = RouteProps;

export const ProtectedRoute: React.FC<Props> = (props: Props) => {
  const condition = false;
  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
