import React from "react";
import Card from "./Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getVideogames , filterGamesByGenre, filterGamesByCreated, filterAsc, filterRank} from "../actions/index"
import {Link} from "react-router-dom"
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import styles from './Paginado.module.css'

export default function Home () {


const Dispatch = useDispatch ()
const AllVideogames = useSelector((state=>state.videogames))
const [currentPage, setCurrentPage] =useState(1)
const [order, setOrder] =useState("")
const [videogamesPerPage, setVideogamesPerPage] = useState(15)
const indexOfLastVideogames = currentPage * videogamesPerPage;
const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage;
const currentVideogames = AllVideogames?.slice(indexOfFirstVideogames, indexOfLastVideogames)


const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
 };
useEffect(() => {
    Dispatch(getVideogames());
    },[Dispatch]);

function handleClick(e){
    e.preventDefault();
    Dispatch(getVideogames());
}

function handleFilterGenre(e){
    e.preventDefault();
    console.log(e.target.value)
    Dispatch(filterGamesByGenre(e.target.value))
}

function handleFilterCreated(e){
    e.preventDefault();
    console.log(e.target.value)
    Dispatch(filterGamesByCreated(e.target.value))
}

function handleSort1(e){
    e.preventDefault();
    Dispatch(filterAsc(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
}
function handleSort2(e){
    e.preventDefault();
    Dispatch(filterRank(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
}


    return(
        <div>
            <Link  className= {styles.btn} to="/videogames"> Crear personaje</Link>
            <SearchBar/>
            <h1 className= {styles.letra} >Videojuegos</h1>
            <button  className= {styles.btn} onClick={e => handleClick(e)}>
                 volver a cargar personajes
            </button>
            <select className= {styles.btn} onChange={e=>handleSort1(e)}>
                <option value="asc">ascendente</option>
                <option >descendente</option>
            </select>
            <select className= {styles.btn} onChange={e=>handleFilterCreated(e)}>
                <option value="todos">todos</option>
                <option value="creadoDB">creados</option>
                <option >existentes</option>
            </select>
            <select className= {styles.btn} onChange={e=>handleSort2(e)}>
                <option >mejores Rankeados</option>
                <option value="Rank">peores Rankeados</option>
            </select>
            <select className= {styles.btn} onChange={e=>handleFilterGenre(e)}>
                <option value="Action">accion</option>
                <option value="Adventure">aventura</option>
                <option value="RPG">RPG</option>
                <option value="Puzzle">puzzle</option>
                <option value="Shooter">tiros</option>
                <option value="Platformer">platformer</option>
                <option value="Indie">indie</option>
                <option value="Massively Multiplayer">multijugador</option>
                <option value="Sports">deportes</option>
                <option value="Racing">carreras</option>
                <option value="Simulation">simulacion</option>
                <option value="Arcade">arcade</option>
                <option value="Fighting">pelea</option>
                <option value="Strategy">estrategia</option>
                <option value="Casual">casual</option>
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
                <div className = {styles.container}>
                <Link className= {styles.sub} to={"/home/" + e.id}>
            <Card key={e.id} name= {e.name} released= {e.released} rating= {e.rating} platforms= {e.platforms} img= {e.img} genres= {e.genres}/>
            </Link>
            </div>
            );
            })}
            </div>
    )
};