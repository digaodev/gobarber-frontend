import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnreads = useMemo(
    () => notifications.some(notif => notif.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notif => ({
        ...notif,
        timeDistance: formatDistance(parseISO(notif.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setIsVisible(!isVisible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notif =>
        notif._id === id ? { ...notif, read: true } : notif
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnreads={hasUnreads}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList isVisible={isVisible}>
        <Scroll>
          {notifications.map(notif => (
            <Notification key={notif._id} unread={!notif.read}>
              <p>{notif.content}</p>
              <time>{notif.timeDistance}</time>
              {!notif.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notif._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
