import React from "react";
import { useEffect} from "react";
import {Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGamesById, Clear } from "../actions"

export default function Detail (props) {
    const Dispatch = useDispatch();
    const gameId = useSelector(state => state.detail);
    

    useEffect(()=>{
        Dispatch(getGamesById(props.match.params.id));
        return ()=>{Dispatch(Clear())}
    },[Dispatch])

    return(
        <div>
            <h1>nombre: {gameId?.name}</h1>
            <h2>rating: {gameId?.rating}</h2>
            <img src={gameId?.image} alt="No hay foto" width="400px" height="400px"/>
            <h5>descripcion:{gameId?.description}</h5>
            <h2>plataformas: {gameId?.platforms}</h2>
            <h2>generos: {gameId?.genres}</h2>
            <Link to="/home">volver</Link>
        </div>

    )
};