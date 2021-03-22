import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from './const';
import { authSaga } from './saga';
import { AuthState } from './types';

const initialAccessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
const initialRefreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

export const initialState: AuthState = {
  accessToken: initialAccessToken || null,
  refreshToken: initialRefreshToken || null,
  error: null,
  loading: 'idle',
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */