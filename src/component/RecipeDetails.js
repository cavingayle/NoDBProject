import React, { Component } from "react";

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servings: props.servings,
      cookTime: props.cookTime,
      instructions: props.instructions,
      ingredients: props.ingredients,
      image: props.image,
    };
  }

  recipeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateRecipe = (id, servings, cookTime, instructions, ingredients, image) => {
    const { updateRecipeFn } = this.props;
    updateRecipeFn(id, servings, cookTime, instructions, ingredients, image);
  };

  // let servings2 = servings.slice()
  render() {
    const {
      id,
      deleteRecipe,
      updateRecipeFn,
      inputToggler,
      inputToggle,
      ingredients,
      servings,
      cookTime,
      instructions,
    } = this.props;

    const { recipeHandler } = this;

    console.log("heyoo", servings);

    return (
      <div>
        <div>
          <span> <strong>Serving Size:  </strong> {servings}</span>
          <div>
            {inputToggle && (
              <input
                name="servings"
                type="number"
                value={this.state.servings}
                onChange={(e) => recipeHandler(e)}
              />
            )}
          </div>
        </div>
        <div>
          <span> <strong>Cook Time:</strong>{cookTime}</span>{" "}
          <div>
            {inputToggle && (
              <input
                name="cookTime"
                type="text"
                value={this.state.cookTime}
                onChange={(e) => recipeHandler(e)}
              />
            )}
          </div>
        </div>

        <div>
          <span> <strong>Instructions:</strong>  {instructions}</span>{" "}
          <div>
            {inputToggle && (
              <input
                name="instructions"
                type="text"
                value={this.state.instructions}
                onChange={(e) => recipeHandler(e)}
              />
            )}
          </div>
        </div>
        <div>
          <div>
            <span> <strong>Ingredients: </strong> {ingredients}</span>
          </div>

          {inputToggle && (
            <input
              name="ingredients"
              type="text"
              value={this.state.ingredients}
              onChange={(e) => recipeHandler(e)}
            />
          )}
        </div>

        <span>
          <button onClick={inputToggler}>Edit</button>
        </span>
        <span>
          <button onClick={() => deleteRecipe(id)}>Delete</button>
        </span>
        {inputToggle && (
          <span>
            <button
              onClick={() => {
                inputToggler();
                updateRecipeFn(
                  id,
                  this.state.servings,
                  this.state.cookTime,
                  this.state.instructions,
                  this.state.ingredients,
                  this.state.image
                );
              }}
            >
              Update
            </button>
          </span>
        )}
      </div>
    );
  }
}

export default RecipeDetails;
