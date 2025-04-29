import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  margin-top: 180px;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 20px;

    margin-top: 12px;
  }
`

export const GoBackHomeButton = styled(Link)`
  margin-top: 32px;

  background: ${({theme}) => theme.COLORS.RED_100};

  width: 420px;
  height: 64px;
  
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;
`