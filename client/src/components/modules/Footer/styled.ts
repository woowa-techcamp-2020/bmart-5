import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #efefef;
  padding-bottom: 4rem;
`;

export const ButtonContainer = styled.div`
  background-color: #efefef;
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 2px solid #afafaf;
`;

export const FooterContent = styled.div`
  margin: 2rem 0;
`;

export const Row = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  & span:last-child {
    font-weight: 800;
  }
  & span {
    margin: 0 1rem;
  }
`;
