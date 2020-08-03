import React from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = (props) => {

  return (
    <div className='recipe-component'>
      <h2>{props.name}</h2>
      <img
        src={props.image}
        alt={props.name}
        style={{
          height: "300px",
          width: "300px",
        }}
              
          />
          <RecipeDetails {...props}/>
    </div>
  );
};

export default Recipe;
