/* --- STATE --- */
import { LoadingState } from 'types/system';

export interface AuthUser {}

export interface AuthState {
  user: AuthUser | null;
  loading: LoadingState;
  accessToken?: string | null;
  refreshToken?: string | null;
  error: any;
}
