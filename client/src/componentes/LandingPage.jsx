import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';

export default function LandingPage () {

    return(
        <div className={styles.imagen}>
            <h1 className= {styles.titulo}>Bienvenido a la Pagina de Videogames</h1>
            <Link to="/home">
            <button className = {styles.boton} >Ingresar a Home</button>
            </Link>
        </div>
    )
};