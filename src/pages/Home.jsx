import {useEffect, useState} from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Card} from "../components/Card"
import {getCharacters} from "../services/starwarsServices.js"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


   useEffect(()=>{
	
	getCharacters()
	.then((data)=>dispatch({type:"update_characters",payload: data}))
	// getPlanets()
   },[])



	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			{store.characters.map((item)=><Card name={item.name} id={item.uid} key={item.uid}/>)}
			
		</div>
	);
}; 