import React, {useContext} from 'react';
import './App.css';
import {MoviContex} from './MovieContex';

const Nav = () => {

    const [movies,setMovies] = useContext(MoviContex);

    return(
        <div className='nav-style'>
            <strong><h3>Lainok Blockchain</h3></strong>
            <h4>Number of Movies : {movies.length} </h4>            
        </div>
    );
};

export default Nav; 