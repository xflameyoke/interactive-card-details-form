import { Form } from 'antd';
import {
  HeadBackground,
  StyledCardBack,
  StyledCardFront,
  StyledCardLogo,
  StyledCardSection,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledDiv
} from 'components';

export const CardForm = (): JSX.Element => {
  const cardNumber = '0000 0000 0000 0000';
  const cvcNumber = '123';
  const cardUser = 'Jan Nowak';
  const cardDate = '00/00';

  return (
    <StyledDiv>
      <HeadBackground />
      <StyledCardBack>
        <p>{cvcNumber}</p>
      </StyledCardBack>
      <StyledCardFront>
        <StyledCardLogo />
        <p>{cardNumber}</p>
        <StyledCardSection>
          <p>{cardUser}</p>
          <p>{cardDate}</p>
        </StyledCardSection>
      </StyledCardFront>
      <StyledForm layout='vertical'>
        <Form.Item label='CARDHOLDER NAME'>
          <StyledInput placeholder='e.g. Jane Appleseed' />
        </Form.Item>
        <Form.Item label='CARD NUMBER'>
          <StyledInput placeholder='e.g. 1234 5678 9123 0000' />
        </Form.Item>
        <Form.Item label='EXP DATE' style={{ display: 'inline-block' }}>
          <StyledInput placeholder='MM' $inputWidth='60px' maxLength={2} />
        </Form.Item>
        <Form.Item label='(MM/YY)' style={{ display: 'inline-block' }}>
          <StyledInput placeholder='YY' $inputWidth='60px' maxLength={2} />
        </Form.Item>
        <Form.Item
          label='CVC'
          style={{ display: 'inline-block', width: '60%' }}
        >
          <StyledInput
            placeholder='e.g. 123'
            $inputWidth='100%'
            maxLength={3}
          />
        </Form.Item>
        <Form.Item>
          <StyledButton>Confirm</StyledButton>
        </Form.Item>
      </StyledForm>
    </StyledDiv>
  );
};
