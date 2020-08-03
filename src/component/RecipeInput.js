import React, { Component } from "react";

class RecipeInput extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      servings: "",
      cookTime: "",
      instructions: "",
      image: "",
      ingredients: '',
    };
  }
  universalHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      name,
      servings,
      cookTime,
      instructions,
      ingredients,
      image,
    } = this.state;

    console.log(name);

    return (
      <div className="recipe-input">
        <div className="recipe-input-details">
          <form
            className="recipe-input-1"
            action=""
            onSubmit={(e) => {
              this.setState({
                name: "",
                servings: "",
                cookTime: "",
                instructions: "",
                image: "",
                ingredients: "",
              });
              this.props.addRecipe(
                e,
                name,
                servings,
                cookTime,
                instructions,
                ingredients,
                image
              );
            }}
          >
            <fieldset>
            <label htmlFor="">
              Name:
              <input
                onChange={(e) => this.universalHandler(e)}
                name="name"
                type="text"
                value={name}
              />
            </label>

            <label htmlFor="">
              Servings:
              <input
                onChange={(e) => this.universalHandler(e)}
                name="servings"
                type="number"
                value={servings}
              />
            </label>
<br/>
            <span><label htmlFor="">
              Cook Time:
              <input
                onChange={(e) => this.universalHandler(e)}
                name="cookTime"
                type="text"
                value={cookTime}
              />
            </label></span>
<br/>
            <label htmlFor="">
              Instructions:
              <input
                onChange={(e) => this.universalHandler(e)}
                name="instructions"
                type="text"
                value={instructions}
              />
            </label>
            <label htmlFor="">
              Ingredients:
              <input
                onChange={(e) => this.universalHandler(e)}
                name="ingredients"
                type="text"
                value={ingredients}
              />
              </label>
              <br/>
                    <label htmlFor="">
              Image:
              <input
                onChange={(e) => this.universalHandler(e)}
                name="image"
                type="text"
                value={image}
              />
              </label>
              <br/>
              <button className="btn">Add Recipe</button>
              </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default RecipeInput;
