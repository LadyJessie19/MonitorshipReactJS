import styled from 'styled-components';

export const BookContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${props => props.secondary ? '#f0f0f0' : '#007bff'};
  color: ${props => props.secondary ? '#333' : '#fff'};
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.secondary ? '#ccc' : '#0056b3'};
  }
`;