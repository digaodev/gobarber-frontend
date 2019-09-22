import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  SIGN_IN_REQUEST,
  signInSuccess,
  SIGN_UP_REQUEST,
  signFailure,
} from './actions';

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

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro. Verifique seus dados.');

    yield put(signFailure());
  }
}

export function setAuthToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setAuthToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);
