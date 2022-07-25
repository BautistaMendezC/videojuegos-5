import React from "react";
import styles from './Cards.module.css' ;


export default function Card ({name,released,rating,platforms,img,genres}){
    console.log(name)
    return(
        <div className = {styles.row}>
            <div className = {styles.column}>
            <div className = {styles.card}>
            <div className = {styles.container}>
                    <div className = {styles.sub}>
                    <h1> {name}</h1>
                    <h2>{genres}</h2>
                    <h3>{rating}</h3>
                    <img src={img} alt="No hay foto" width="400px" height="250px"/>
                    <h3>{released}</h3>
                    <h3>{platforms}</h3>
                    </div>
            </div>
            </div>
            </div>
          </div>
    )
}