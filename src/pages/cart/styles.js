import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
  gap: 24px;
  grid-template-areas: 
    "payment items"
    "payment items"
  ;

  margin-top: 32px;
`;

export const CartItems = styled.div`
  grid-area: items;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 8px;

  width: 600px;
  height: 620px;

  margin-top: 44px;
`;

export const Payment = styled.div`
  grid-area: payment;
  
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 450px;

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
      margin: 14px 0px 8px 0px;

      font-weight: 500;
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

  .button-wrapper button {
    margin-top: 24px;

    height: 64px;
    width: 420px;
  }
`;

