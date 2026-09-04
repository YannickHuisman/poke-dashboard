import styled from 'styled-components';

import { FlexRow } from '@components/Flex';

export const StyledToolbar = styled(FlexRow)`
  width: auto;
  position: sticky;
  top: ${({ theme }) => theme.layout.topBarHeight};
  z-index: 10;
  margin: -${({ theme }) => theme.layout.mainPadding} -${({ theme }) => theme.layout.mainPadding}
    ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.layout.mainPadding};
  background: ${({ theme }) => theme.glass.toolbar};
  backdrop-filter: ${({ theme }) => theme.glass.blur};
`;

export const StyledSearchSlot = styled.div`
  width: 100%;
  max-width: 480px;
`;
