import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Jumbotron, Button, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


function Home(){

    return(
        <div>
            <Head>
                <title>Home - Evandro</title>
                <meta name="description" content="Solicitar orcamento para ..." />
            </Head>

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

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0A197D;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Mauris nec urna et mi pulvinar tristique eget quis nunc.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="laptop-code" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço um</h2>
                            <p>
                                Praesent quis sagittis libero, nec suscipit neque. Quisque ut ultrices lectus, sit amet sollicitudin mauris.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="mobile-alt" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço dois</h2>
                            <p>
                                Nullam rutrum imperdiet nisi, eget facilisis elit consectetur accumsan lectus, sit amet sollicdin efficitur.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                 <FontAwesomeIcon icon="network-wired" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço tres</h2>
                            <p>
                                Quisque elementum suscipit dolor, sed lobortis nibh. Curabitur et dui iaculis, consectetur enim vitae purus.
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron> 

            <Footer />     

        </div>
    ); 
}
export default Home;