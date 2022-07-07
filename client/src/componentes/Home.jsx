import React, { Fragment } from "react";
import Card from "./Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getVideogames} from "../actions/index"
import {Link} from "react-router-dom"
import Paginado from "./Paginado";

export default function Home () {


const Dispatch = useDispatch ()
const AllVideogames = useSelector((state=>state.videogames))
const [currentPage, setCurrentPage] =useState(1)
const [videogamesPerPage, setVideogamesPerPage] = useState(10)
const indexOfLastVideogames = currentPage * videogamesPerPage;
const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage;
const currentVideogames = AllVideogames?.slice(indexOfFirstVideogames, indexOfLastVideogames)


const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
 };
useEffect(() => {
    Dispatch(getVideogames());
    },[Dispatch]);

function handleClick (e){
    e.preventDefault();
    Dispatch(getVideogames())
}
    return(
        <div>
            <Link to="/character"> Crear personaje</Link>
            <h1> Bienvenido a tu pagina de videojuegos</h1>
            <button onClick={e => {handleClick(e)}}>
                 volver a cargar personajes
            </button>
            <select>
                <option value="ascendente">ascendente</option>
                <option value="descendente">descendente</option>
            </select>
            <select>
                <option value="creadoDB">creados en DB</option>
                <option value="creadosAPI">Creados en la API</option>
            </select>

            <div>
            <Paginado
                    videogamesPerPage ={videogamesPerPage}
                    AllVideogames ={AllVideogames?.length}
                    paginado ={paginado}
                />

            </div>
        
            { 
           currentVideogames?.map((e)=>{
            return(
                <Fragment>
                <Link to={"/home/" + e.id}>
            <Card name= {e.name} released= {e.released} rating= {e.rating} platforms= {e.platforms} img= {e.img} genres= {e.genres}/>
            </Link>
            </Fragment>
            );
            })}
            </div>
    )
};