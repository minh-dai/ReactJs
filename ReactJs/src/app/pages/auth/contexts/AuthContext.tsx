import * as React from 'react';
import { useAuthRequester } from '../hooks/useAuthRequester';

const AuthContext = React.createContext({});

export const AuthContextProvider: React.FC<{
  children: JSX.Element;
}> = props => {
  const { isLogin, loading, error } = useAuthRequester();

  const contextValue = React.useMemo(() => ({}), []);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
