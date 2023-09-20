import styled from 'styled-components';

export const StyledCompleteState = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.veryDarkViolet};

  h1 {
    margin-top: 28px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrayishViolet};
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
`;
