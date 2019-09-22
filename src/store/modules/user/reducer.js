import produce from 'immer';

import { SIGN_IN_SUCCESS } from '../auth/actions';

const INITIAL_STATE = {
  profile: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.profile = payload.user;
      });

    default:
      return state;
  }
};
