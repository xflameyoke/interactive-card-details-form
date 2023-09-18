import { styled } from 'styled-components';
import { Form, Input, Button } from 'antd';
import type { IProps } from './CardForm.types';

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeadBackground = styled.header`
  width: 25%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('src/assets/images/bg-main-desktop.png');

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 25%;
    background-image: url('src/assets/images/bg-main-mobile.png');
  }
`;

export const StyledCardBack = styled.div`
  width: 400px;
  height: 220px;
  border-radius: 15px;
  position: absolute;
  top: 450px;
  left: 380px;
  box-shadow: ${({ theme }) => theme.boxShadows.regular};
  background-image: url('src/assets/images/bg-card-back.png');
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};

  p {
    position: absolute;
    top: 80px;
    left: 80%;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 128px;
    top: 25px;
    left: 30%;

    p {
      font-size: 12px;
      top: 48px;
      left: 80%;
    }
  }
`;

export const StyledCardFront = styled.div`
  width: 400px;
  height: 220px;
  border-radius: 15px;
  top: 160px;
  left: 280px;
  box-shadow: ${({ theme }) => theme.boxShadows.regular};
  background-repeat: no-repeat;
  background-image: url('src/assets/images/bg-card-front.png');
  background-size: cover;
  position: absolute;

  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 24px;
    letter-spacing: 5px;
    position: relative;
    top: 45%;
    left: 5%;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 128px;
    top: 110px;
    left: 25px;
    padding: 10px;

    p {
      font-size: 18px;
      letter-spacing: 2px;
      position: relative;
      top: 25%;
      left: 3%;
    }
  }
`;

export const StyledCardLogo = styled.div`
  width: 90px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 10px;
  background: url('src/assets/images/card-logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  @media (max-width: 768px) {
    width: 75px;
    height: 30px;
    left: 5px;
  }
`;

export const StyledCardSection = styled.div`
  width: 90%;
  position: absolute;
  left: 0;
  bottom: 5px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 95%;
    p {
      font-size: 12px;
      margin: 10px;
    }
  }
`;

export const StyledForm = styled(Form)`
  width: 350px;
  margin-left: 600px;

  @media (max-width: 768px) {
    margin-top: 220px;
    margin-left: 0;
  }
`;

export const StyledInput = styled(Input)<IProps>`
  width: ${(props) => props?.$inputWidth || '100%'};
  margin-left: ${(props) => props?.$inputMarginLeft || '0%'};
  height: 30px;
  padding: 5px;
  font-size: 12px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
  color: ${({ theme }) => theme.colors.white};
`;
