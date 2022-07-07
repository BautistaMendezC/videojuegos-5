import React from "react";

export default function Paginado({videogamesPerPage, AllVideogames, paginado}){
    const pageNumbers = []  
    
    for( let i=0; i < Math.ceil(AllVideogames/videogamesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return (
        <nav>
          <ul className="paginado">
            {pageNumbers && pageNumbers.map(number => {return(
              
              <li className="cualquiercosa" key={number}>
                <button onClick={() => paginado(number)}>
                  {number}
                </button>
              </li>
            )})}
          </ul>
        </nav>
      );

}