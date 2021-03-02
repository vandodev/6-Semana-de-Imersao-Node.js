import React from 'react';

import {Container, Jumbotron} from 'reactstrap';

const Footer = () =>{
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #050D3D;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container className="text-center">
                <h1 className="lead">Copyright © Evandro Oliveira</h1>
            </Container>
        </Jumbotron>
    );
};

export default Footer;