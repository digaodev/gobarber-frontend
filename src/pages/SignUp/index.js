import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Formato de email inválido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="seu nome completo" />
        <Input type="email" name="email" placeholder="seu email" />
        <Input
          type="password"
          name="password"
          placeholder="sua senha secreta"
        />

        <button type="submit">Criar conta gratuita</button>

        <Link to="/">Já tem uma conta? Login</Link>
      </Form>
    </>
  );
}
