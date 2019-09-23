import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo-purple.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber Logo" />

          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>

              <Link to="profile">Meu perfil</Link>
              <button type="button" onClick={() => dispatch(signOut())}>
                Sign out
              </button>
            </div>

            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
