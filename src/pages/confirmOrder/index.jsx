import { Container, Content, GoBackHomeButton } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function ConfirmOrder() {

  return (
    <Container>

      <Header/>

      <Content>

        <h1>Obrigado por comprar conosco!</h1>
        <p>Seu pedido n.º 25492 está em preparação e será entregue em breve.</p>  

        <GoBackHomeButton to = "/">Retornar à página inicial</GoBackHomeButton>      

      </Content>

      <Footer/>

    </Container>
  )
}
