import { useSelector } from 'react-redux';
import * as authSelectors from '../slice/selectors';

export const useAuthRequester = () => {
  const isLogin = useSelector(authSelectors.selectAuthIsLogin);
  const loading = useSelector(authSelectors.selectAuthLoading);
  const error = useSelector(authSelectors.selectAuthError);
  
  return {
    isLogin,
    loading,
    error,
  };
};
