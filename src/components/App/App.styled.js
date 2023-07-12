import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  font-size: 40px;
  color: #010101;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  a {
    display: flex;
    text-decoration: none;
    padding: 20px;
    &.active {
      color: red;
    }
  }
`;
