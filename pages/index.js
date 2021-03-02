import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import Menu from '../components/Menu';

function Home(){

    return(
        <div>
           <Menu />
           <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #050c3d;
                        color: #00a1fc;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
               <Container className="text-center">
               <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>
                    </p>
                </Container>
      </Jumbotron>
        </div>
    ); 
}
export default Home;