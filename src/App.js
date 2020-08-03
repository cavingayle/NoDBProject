import React, { Component } from "react";
import axios from "axios";
import "./css/App.css";

// Components
import Recipe from "./component/Recipe";
import Header from "./component/Header";
import RecipeInput from "./component/RecipeInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      inputToggle: false,
    };
    this.inputToggler = this.inputToggler.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    axios
      .get("/api/recipes/")
      .then((res) => {
        this.setState({ recipes: res.data });
      })
      .catch((err) => console.log(err));
  };

  updateRecipe = (id, servings, cookTime, instructions, ingredients, image) => {
    axios
      .put(`/api/recipes/update/${id}`, { servings, cookTime, instructions, ingredients, image })
      .then((res) => {
        this.setState({
          recipes: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  addRecipe = (
    e,
    name,
    servings,
    cookTime,
    instructions,
    ingredients,
    image
  ) => {
    e.preventDefault();
    axios
      .post("/api/recipes/", {
        name,
        servings,
        cookTime,
        instructions,
        ingredients,
        image,
      })
      .then((res) => {
        this.setState({
          recipes: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  deleteRecipe = (id) => {
    axios
      .delete(`/api/recipes/${id}`)
      .then((res) => {
        this.setState({
          recipes: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  inputToggler = () => {
    this.setState({
      inputToggle: !this.state.inputToggle,
    });
  };

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <Header />
        <RecipeInput addRecipe={this.addRecipe} />
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              {...recipe}
              deleteRecipe={this.deleteRecipe}
              inputToggle={this.state.inputToggle}
              inputToggler={this.inputToggler}
              updateRecipeFn={this.updateRecipe}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
