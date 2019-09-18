import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  height: 100%;
`;

export const Content = styled.div`
  max-width: 325px;
  text-align: center;
  width: 100%;

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
        }
      }
  }
`;
