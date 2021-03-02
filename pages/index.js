import React from 'react';
import { Button } from 'reactstrap';
import Menu from '../components/Menu';

function Home(){

    return(
        <div>
           <Menu />
           <Button color="warning">Enviar</Button>
        </div>
    ); 
}
export default Home;