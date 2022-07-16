import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
import {getNameGames} from "../actions/index"
import styles from './Paginado.module.css'

export default function SearchBar () {

    const[name, setname] = useState("");
    const Dispatch =useDispatch()

    function handleSubmit (e){
        e.preventDefault();
        Dispatch(getNameGames(name))
    }
    function handleInputChange(e){
        e.preventDefault();
        setname(e.target.value)
    }

    return(
        <div>
         <input
         className= {styles.btn}
         type="text"
         placeholder="buscar..."
         onChange={e=> handleInputChange(e)}
         />
         <button className= {styles.btn} type="submit" onClick={e=> handleSubmit(e)}>buscar</button>
        </div>
    )
};