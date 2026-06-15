import React from 'react'
import "../App.css"



export default function Card(props) {
  return (
    <div className="card">
        <div >
            <img className="card-image" src={props.image} alt={props.name}   />
        </div>
        <h1 className="card-title">{props.name}</h1>
        <div className="card-description">{props.name} {props.description}</div>
        <div className="card-characters">{props.characters}</div>
        
        <button className="card-button" onClick={() => props.action(props.name ,props.characters)} >button</button>


    </div>
  )
}
