import { Container } from "./styles";

import { QRCodeCanvas } from "qrcode.react";

export function QRCode() {

  return(
    <Container>

      <QRCodeCanvas 
        className = "qrcode"
        value = "#"
        size={240}
      />

    </Container>
  )
}