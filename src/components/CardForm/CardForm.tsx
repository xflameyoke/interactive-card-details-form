import {
  FormWrapper,
  HeadBackground,
  StyledCardBack,
  StyledCardFront
} from 'components';

export const CardForm = (): JSX.Element => {
  const cardNumber = '0000 0000 0000 0000';
  return (
    <FormWrapper>
      <HeadBackground />
      <StyledCardBack />
      <StyledCardFront>
        <p>{cardNumber}</p>
      </StyledCardFront>
    </FormWrapper>
  );
};
