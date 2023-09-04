import { styled } from 'styled-components';

export const FormWrapper = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
`;

export const HeadBackground = styled.header`
  width: 100vw;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('src/assets/images/bg-main-mobile.png');
`;

export const StyledCardBack = styled.div`
  height: 200px;
  position: relative;
  top: -170px;
  left: 33%;
  background-repeat: no-repeat;
  background-image: url('src/assets/images/bg-card-back.png');
  background-size: 250px 150px;
`;

export const StyledCardFront = styled.div`
  height: 200px;
  position: relative;
  top: -285px;
  left: 5%;
  color: white;
  background-repeat: no-repeat;
  background-image: url('src/assets/images/bg-card-front.png');
  background-size: 250px 150px;
`;
