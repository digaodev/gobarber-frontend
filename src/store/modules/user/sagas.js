import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  UPDATE_PROFILE_REQUEST,
  updateProfileSuccess,
  updateProfileFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    let profile = { name, email };

    if (rest.oldPassword) {
      profile = { ...profile, ...rest };
    }

    const { data } = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(data));
  } catch (error) {
    toast.error('Erro ao atualizar perfil. Confira seus dados');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
