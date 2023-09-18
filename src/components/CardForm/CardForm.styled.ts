import { styled } from 'styled-components';
import { Form, Input, Button } from 'antd';
import type { IProps } from './CardForm.types';

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeadBackground = styled.header`
  width: 30%;
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
  width: 250px;
  height: 200px;
  position: absolute;
  top: 25px;
  right: 25px;
  background-repeat: no-repeat;
  background-image: url('src/assets/images/bg-card-back.png');
  background-size: 250px 150px;
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 12px;
    position: absolute;
    top: 55px;
    left: 80%;
  }
`;

export const StyledCardFront = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 420px;
  height: 320px;
  background-repeat: no-repeat;
  background-image: url('src/assets/images/bg-card-front.png');
  background-size: contain;
  position: absolute;
  top: 160px;
  left: 120px;

  @media (max-width: 768px) {
    width: 270px;
    height: 200px;
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

export const StyledCardSection = styled.section`
  width: 90%;
  position: absolute;
  bottom: 75px;
  left: 0;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
    margin: 10px;
  }
`;

export const StyledForm = styled(Form)`
  width: 350px;
  margin-top: 180px;

  @media (max-width: 768px) {
    margin-top: 220px;
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
