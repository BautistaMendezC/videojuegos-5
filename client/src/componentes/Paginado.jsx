import React from "react";
import  styles  from './Paginado.module.css'

export default function Paginado({videogamesPerPage, AllVideogames, paginado}){
    const pageNumbers = []  
    
    for( let i=0; i < Math.ceil(AllVideogames/videogamesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return (
        <nav>
          <ul className="paginado">
            {pageNumbers && pageNumbers.map(number => {return(
              
              <li className={styles.numbers} key={number}>
                <button className= {styles.btn} onClick={() => paginado(number)}>
                  {number}
                </button>
              </li>
            )})}
          </ul>
        </nav>
      );

}