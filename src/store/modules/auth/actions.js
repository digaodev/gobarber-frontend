export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  payload: { email, password },
});

export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const signInSuccess = (token, user) => ({
  type: SIGN_IN_SUCCESS,
  payload: { token, user },
});

export const SIGN_FAILURE = '@auth/SIGN_FAILURE';
export const signFailure = () => ({
  type: SIGN_FAILURE,
});