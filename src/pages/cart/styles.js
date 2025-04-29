import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import { Link } from "react-router-dom";

export const Container = styled.div`
`;

export const Content = styled.div`
  padding: 32px 121px;

  .gobackbutton-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Main = styled.div`
  display: grid;
  place-content: center;
  gap: 52px;
  grid-template-areas: 
    "items address payment"
    "items address payment"
    "items button button"
  ;

  margin-top: 32px;
`;

export const CartItems = styled.div`
  grid-area: items;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 8px;

  width: 390px;
  height: 620px;

  margin-top: 44px;
`;

export const Address = styled.div`
  margin-top: 51px;

  h1 {
    margin-bottom: 36px;
  }

  p {
    margin: 14px 0px 6px 0px;

    font-size: 18px;
  }
`

export const Payment = styled.div`
  grid-area: payment;
  
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 44px;

  .paymentSelector-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    .paymentOptions-wrapepr {
      background: ${({theme}) => theme.COLORS.RED_100};

      display: flex;
      align-items: center;
      gap: 10px;

      padding: 12px;

      border: none;
      border-radius: 5px;

      span {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  .cardPayment-wrapper 
    p {
      margin: 14px 0px 6px 0px;

      font-size: 18px;
    }

  .securityCode-wrapper p, .quota-wrapper p {
    margin: 14px 0px 8px 0px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 14px; 
  }
`;

export const GoConfirmButton = styled(Link)`
  grid-area: button;

  display: flex;
  justify-content: center;
  place-items: center;

  font-size: 20px;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  
  width: 100%;
  height: 64px;

  margin-top: -64px;

  background: ${({ theme }) => theme.COLORS.RED_100};

  border: none;
  border-radius: 5px;
`;