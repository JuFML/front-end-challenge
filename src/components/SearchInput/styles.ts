import styled from 'styled-components';

import DefaultSearchLineIcon from '$/assets/icons/search-line.svg';
import { Input as DefaultInput } from '$/components/Input';

export const Container = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.grayscale700};
`;

export const Input = styled(DefaultInput)`
  width: 100%;
  & input {
    padding-block: 1.938rem;
    padding-inline-start: 3.5rem;
  }
`;

export const SearchLineIcon = styled(DefaultSearchLineIcon)`
  position: absolute;
  inset: 50% 1.375rem;

  transform: translateY(-50%);
`;
