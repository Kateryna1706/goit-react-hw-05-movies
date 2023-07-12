import styled from '@emotion/styled';

export const ContainerForPadding = styled.div`
  padding: 20px;
`;

export const AdditionalInform = styled.div`
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  /* padding-top: 20px; */
  padding-bottom: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  p,
  ul,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

export const DetailsTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  font-size: 25px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-size: 25px;
`;

export const ListAdditional = styled.ul`
  font-size: 25px;
`;
