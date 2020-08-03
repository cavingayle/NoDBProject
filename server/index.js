const express = require("express");
const app = express();
app.use(express.json());

const ctrl = require("./contorller");

const port = 4040;
const url = "/api/recipes/"

app.get(url, ctrl.getRecipes);
app.post(url, ctrl.addRecipe);
app.delete(url + ":id", ctrl.deleteRecipe);
app.put(url + "update/:id", ctrl.updateRecipe)

app.listen(port, () => console.log(`Server running on port ${port}`));
