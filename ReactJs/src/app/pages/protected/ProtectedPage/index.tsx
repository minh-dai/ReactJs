/**
 *
 * ProtectedPage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { ProtectedLayout } from '../components/ProtectedLayout';
import { ProtectedContextProvider } from '../contexts/ProtectedContext';
import { Route } from 'react-router';

interface Props {
  children: JSX.Element;
}

export function ProtectedPage(props: Props) {
  return (
    <ProtectedContextProvider>
      <ProtectedLayout>
        <Route path={'/account'}></Route>
      </ProtectedLayout>
    </ProtectedContextProvider>
  );
}
