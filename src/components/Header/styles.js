import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 32px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  margin: 0 auto;
  max-width: 900px;

  nav {
    display: flex;
    align-items: center;

    img {
      border-right: 1px solid #eee;
      margin-right: 24px;
      padding-right: 24px;
    }

    a {
      color: #7159c1;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  border-left: 1px solid #eee;
  margin-left: 24px;
  padding-left: 24px;

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      color: #333;
      display: block;
    }

    a {
      color: #777;
      font-size: 12px;
      margin-top: 2px;
      padding: 2px;
      transition: all 0.2s;

      &:hover {
        color: #666;
        text-decoration: underline;
      }
    }

    span {
      color: #ddd;
      margin: 0 4px;
    }

    button {
      border: 0;
      background: none;
      color: #777;
      font-size: 12px;
      padding: 2px;
      margin-top: 2px;
      transition: all 0.2s;

      &:hover {
        color: #666;
        text-decoration: underline;
      }
    }
  }

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
`;
