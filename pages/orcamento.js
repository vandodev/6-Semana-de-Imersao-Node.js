import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import {  Container, Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap';

function orcamento(){
    return(
        <div>

        <Head>
            <title>Orcamento - Evandro</title>
            <meta name="description" content="Solicitar orcamento para ..." />
        </Head>

          <Menu />

          <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
              background-color: #050c3d;
              color: #00a1fc;
              padding-top: 40px;
              padding-bottom: 40px;
              margin-bottom: 0rem !important;
          }`}
        </style>

        <Container className="text-center">
          <h1 className="display-4">Orçamento</h1>
        </Container>

        </Jumbotron>

        <Jumbotron fluid className="form-orcamento">
        <style>
          {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Prencha com o nome completo" />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="Prencha com o seu melhor e-mail" />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" name="whatsApp" id="whatsApp" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
              <Label for="projeto">Projeto</Label>
              <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco do seu projeto" />
            </FormGroup>

            <Button type="submit" outline color="primary">Solicitar</Button>
          </Form>
        </Container>
      </Jumbotron>
         
        <Footer />  
        </div>
    ); 
}
export default orcamento;