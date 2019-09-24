import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 600px;
  padding: 24px;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 24px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;

    margin-top: 30px;
  }
`;

export const Time = styled.li`
  background: ${props => (props.past ? '#ddd' : '#fff')}
  border-radius: 4px;
  padding: 20px;

  strong {
    display: block;

    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;

    color: ${props => (props.available ? '#666' : '#7159c1')};
    margin-top: 3px;
  }
`;
