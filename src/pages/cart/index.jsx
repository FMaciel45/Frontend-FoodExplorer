import { Container, Content, Main, CartItems, Payment } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { QRCode } from "../../components/qrcode";

import { FiArrowLeft } from "react-icons/fi";

import Switch from "react-switch";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("pix");

  function handleBack() {
    navigate(-1);
  }

  function handleSwitchChange(checked) {
    setPaymentMethod(checked ? "pix" : "cartao");
  }

  return (
    <Container>

      <Header />

      <Content>

        <div className="gobackbutton-wrapper">

          <FiArrowLeft />
          <ButtonText title="Voltar" onClick={handleBack} />

        </div>

        <Main>

          <CartItems>



          </CartItems>

          <Payment>

            <div className="paymentSelector-wrapper">

              <h1>Pagamento</h1>

              <div className="paymentOptions-wrapepr">

                <span>Cartão</span>

                <Switch
                  onChange={handleSwitchChange}
                  checked={paymentMethod === "pix"}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  offColor="#ccc"
                  onColor="#ccc"
                />

                <span>Pix</span>

              </div>

            </div>

            {paymentMethod === "pix" && (
              <div className="pixPayment-wrapper">
                <QRCode />
              </div>
            )}

            {paymentMethod === "cartao" && (

              <div className="cardPayment-wrapper">

                <p>Número do cartão</p>
                <Input placeholder="Ex.: 1234 1234 1234 1234" type="number" />

                <p>Validade do cartão</p>
                <Input placeholder="Ex.: 12/23" type="text" />

                <p>Nome do titular</p>
                <Input placeholder="Ex.: Jeremias O Silva" type="text" />

                <p>CPF do titular</p>
                <Input placeholder="Ex.: 123.123.123-12" type="number" />

                <div className="input-wrapper">

                  <div className="securityCode-wrapper">
                    <p>Código de segurança</p>
                    <Input placeholder="Ex.: 123" type="number" />
                  </div>

                  <div className="quota-wrapper">
                    <p>Quantidade de parcelas</p>
                    <Input placeholder="Quantidade de parcelas" />
                  </div>

                </div>

              </div>

            )}

            <div className="button-wrapper">

              <Button title="Efetuar pedido" />

            </div>

          </Payment>

        </Main>

      </Content>

      <Footer />

    </Container>
  );
}
