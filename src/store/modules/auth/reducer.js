import produce from 'immer';

import { SIGN_IN_SUCCESS } from './actions';

const INITIAL_STATE = {
  token: null,
  isSignedIn: false,
  isLoading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = payload.token;
        draft.isSignedIn = true;
      });

    default:
      return state;
  }
};
