import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { SIGN_IN_REQUEST, signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const { data } = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = data;

  if (!user.provider) {
    console.tron.error('Usuário não é prestador');
  } else {
    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);