import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1100; // bigger than leaflet
    top: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    cursor: pointer;

    svg {
      transition: color ${theme.transition.default};

      &:hover {
        color: ${theme.colors.pictonBlue};
      }
    }
  `}
`;