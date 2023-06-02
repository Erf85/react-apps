import React from 'react'

const Recipe = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>s
      <p>{props.calories} cal</p>
      <img src={props.image} alt=""/>
      </div>
  )
}

export default Recipe
