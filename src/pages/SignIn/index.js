import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';
import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de email inválido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="seu email" />
        <Input
          type="password"
          name="password"
          placeholder="sua senha secreta"
        />

        <button type="submit">Acessar</button>

        <Link to="/register">
          Ainda não tem uma conta? Criar uma conta gratuita
        </Link>
      </Form>
    </>
  );
}
