import React from "react";
import { useEffect, useState } from "react";
import {Link , useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postVidegames , getGenres} from "../actions"

function validate (input){
    let errors ={};
    if (!input.name){
        errors.name = "el nombre es un campo necesario";
    }
    if (input.rating > 5 || input.rating < 0 ){
        errors.rating = "el videojuego solo se puede rankear del 1 al 5"
    }
    if (!input.description){
        errors.description = "la descripcion es un campo obligatorio"
 } return errors
}

export default function VideogameCreate () {

    const Dispatch = useDispatch();
    const allGenres = useSelector((state)=> state.genres)
    const history = useHistory();
    const [errors, setErrors] =useState({})

    const platforms = [{id:1, name:'PC'},{id:2, name:'Playstation 3'},{id:3, name:'Playstation 4'},{id:4, name:'PC'},{id:5, name:'Xbox 360'},{id:6, name:'Xbox one'},{id:7, name:'Xbox series s/x'},{id:8, name:'MacOS'},{id:9, name:'Android'},{id:10, name:'Web'},{id:11, name:'Ps vita'},{id:12, name:'Linux'}];

    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        rating :"",
        img:"",
        genres :[],
        platforms:[],
    })

    useEffect(()=>{
        Dispatch(getGenres());
    },[Dispatch]);

    function handleChange (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSelect (e){
             setInput({
                  ...input,
                 genres: [...input.genres, e.target.value]
            })
        }
    
    function handleSelect2 (e){
             setInput({
                  ...input,
                 platforms: [...input.platforms, e.target.value]
            })
        }

    function handleDelete(el){
            setInput({
                ...input,
                genres: input.genres.filter(g => g !== el)
            })
    }
    function handleDelete2(el){
        setInput({
            ...input,
            platforms: input.platforms.filter(pl => pl !== el)
        })
}
    

    function handleSubmit (e){
        e.preventDefault();
        Dispatch(postVidegames(input));
        alert("videojuego creado");
        setInput({
        name: "",
        description: "",
        released: "",
        rating :"",
        img:"",
        genres :[],
        platforms:[]
        })
        history.push("/home");
    }

    return(
        <div>
            <Link to="/Home"><button>Volver</button></Link>
            <h1>Creá tu videojuego</h1>
           
            <form>
                <div>
                    <label>nombre</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={e=> handleChange(e)}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>descripcion</label>
                    <input
                    type="text"
                    value={input.description}
                    name="description"
                    onChange={e=> handleChange(e)}
                    />
                       {errors.description && (
                        <p>{errors.description}</p>
                    )}
                </div>
                <div>
                    <label>lanzamiento</label>
                    <input
                    type="date"
                    value={input.released}
                    name="released"
                    onChange={e=> handleChange(e)}
                    />
                </div>
                <div>
                    <label>rating</label>
                    <input
                    type="text"
                    value={input.rating}
                    name="rating"
                    onChange={e=> handleChange(e)}
                    />
                       {errors.rating && (
                        <p>{errors.rating}</p>
                    )}
                </div>
                <div>
                    <label>imagen</label>
                    <input
                    type="text"
                    value={input.img}
                    name="img"
                    onChange={e=> handleChange(e)}
                    />
                </div>
                <label >Genre </label>
                <select onChange={(e)=> handleSelect(e)}>
                  {allGenres?.map((g) => (<option key={g.id}value={g.name}>{g.name}</option>))}
              </select> 
              <div/> 
               <label>Platform </label>
              <select onChange={(e)=> handleSelect2(e)}>
                   {platforms?.map((platforms) => (<option key={platforms.id} value={platforms.name}>{platforms.name}</option>))}
               </select> 
               <div/>
                    <div>
                        { !errors.name && !errors.rating && !errors.description &&(
                    <button type="Submit" onClick={(e)=>handleSubmit(e)}> Submit </button>
                        )}
                    </div>
                {input.platforms.map(el=>
                    <div>
                    <p>{el}</p>
                    <button onClick={()=> {handleDelete2(el)}}>X</button>
                    </div>
                    )}
                    <div></div>
                    
                {input.genres.map(el=>
                    <div>
                    <p>{el}</p>
                    <button onClick={()=> {handleDelete(el)}}>X</button>
                    </div>
                    )}
            </form>

        </div>
    )
}