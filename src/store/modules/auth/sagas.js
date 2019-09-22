import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { SIGN_IN_REQUEST, signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = data;

    if (!user.provider) {
      toast.error('Usuário não é prestador');
    } else {
      yield put(signInSuccess(token, user));

      history.push('/dashboard');
    }
  } catch (error) {
    toast.error('Email ou senha inválidos');
    yield put(signFailure());
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
