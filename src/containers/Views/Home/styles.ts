import styled from 'styled-components';

import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
  margin-bottom: 30px;
`;
