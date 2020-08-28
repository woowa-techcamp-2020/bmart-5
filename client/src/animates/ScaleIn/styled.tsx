import styled from 'styled-components';

export const div = styled.div`
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  :active {
    box-shadow: 0 3px 15px -2px;
    transform: scale(0.9);
  }
`;
