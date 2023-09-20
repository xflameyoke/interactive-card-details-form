import { StyledCompleteState, StyledButton } from 'components';

export const CompleteState = () => (
  <StyledCompleteState>
    <img src='src/assets/images/icon-complete.svg' alt='SVG Complete Icon' />
    <h1>Thank you!</h1>
    <p>We&apos;ve added your card details</p>
    <StyledButton>Continue</StyledButton>
  </StyledCompleteState>
);
