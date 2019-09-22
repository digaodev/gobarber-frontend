import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import ScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;

  background: none;
  border: 0;

  ${props =>
    props.hasUnreads &&
    css`
      &::after {
        position: absolute;
        content: '';
        right: 0;
        top: 0;

        background: #ff892e;
        border-radius: 50%;
        height: 8px;
        width: 8px;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')}

  position: absolute;
  left: calc(50% - 130px);
  top: calc(100% + 32px);

  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  width: 260px;

  &::before {
    position: absolute;
    content: '';
    left: calc(50% - 20px);
    top: -20px;

    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
    height: 0;
    width: 0;
  }
`;

export const Scroll = styled(ScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 16px;
    padding-top: 16px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
  }

  time {
    display: block;

    font-size: 12px;
    margin-bottom: 4px;
    opacity: 0.6;
  }

  button {
    background: none;
    border: 0;
    color: ${lighten(0.2, '#7159c1')};
    font-size: 12px;
    margin: 0;
    padding: 0;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        display: inline-block;
        content: '';

        background: #ff892e;
        border-radius: 50%;
        height: 8px;
        margin-left: 10px;
        width: 8px;
      }
    `}
`;
