import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
margin: 0 auto;
padding: 24px
max-width: 400px;

form {
    display: flex;
    flex-direction: column;

    margin-top: 32px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      align-self: flex-start;
      color: #ffb8c9;
      font-weight: bold;
      margin-bottom: 10px;
    }

    hr {
      background: rgba(255,255,255,0.2);
      border: 0;
      height: 1px;
      margin: 10px 0 20px;
    }

    button {
        background: #fff;
        border: 0;
        border-radius: 4px;
        color: #715fc1
        font-weight: bold;
        height: 44px;
        margin: 5px 0 0;

        transition: all 0.3s

        &:hover {
          background: ${darken(0.03, '#715fc1')};
          color: #fff
        }
      }

      a {
        color: #fff;
        font-size: 14px;
        margin-top: 15px;
        opacity: 0.8;

        transition: all 0.2s

        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
      }


  }

  > button {
        background: #f64c75;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        height: 44px;
        margin: 5px 0 0;
        width: 100%;
        transition: all 0.3s;

        &:hover {
          background: #fff;
          color: #f64c75;
        }
      }

      a {
        color: #fff;
        font-size: 14px;
        margin-top: 15px;
        opacity: 0.8;

        transition: all 0.2s

        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
      }
`;
