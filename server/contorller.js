const recipes = require('./recipes.json')
let id = 4


module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(recipes)
    },
    addRecipe: (req, res) => {
        const { name, servings, cookTime, instructions,  ingredients, image} = req.body
        if (!name || !image) {
            res.status(405).send('Recipe needs a name')
        } else {
            const newRecipe = {
                id,
                name,
                servings,
                cookTime,
                instructions,
                ingredients,
                image
            }
            recipes.push(newRecipe)
            id++
            res.status(200).send(recipes)
        }
      
    },

    deleteRecipe: (req, res) => {
        const { id } = req.params
        const index = recipes.findIndex( recipes => recipes.id === +id )
        if (index === -1) {
            res.status(404).send('Recipe not found')
        }
        recipes.splice(index, 1)
        res.status(200).send(recipes)
    },

    updateRecipe: (req, res) => {
        const { id } = req.params
        const {  servings, cookTime, instructions, ingredients, image } = req.body
        const index = recipes.findIndex(recipe => recipe.id === +id)
        if (index === -1) {
            res.status(404).send('Recipe not found')
        } else {
            recipes[index].servings = servings
            recipes[index].cookTime = cookTime
            recipes[index].instructions = instructions
            recipes[index].ingredients = ingredients
            res.status(200).send(recipes)
        }
    }
}