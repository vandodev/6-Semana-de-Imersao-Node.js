import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Container, Jumbotron} from 'reactstrap';

function orcamento(){
    return(
        <div>
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

        <Container>
           <h1>Página de orçamento</h1>
        </Container>
         
        <Footer />  
        </div>
    ); 
}
export default orcamento;