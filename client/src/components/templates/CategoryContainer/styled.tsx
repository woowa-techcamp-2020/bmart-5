import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 5px;
  padding: 0 1rem;
`;

export const CategoryContainer = styled.div`
  display: grid;
  width: 100%;
  height: 24rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
`;
