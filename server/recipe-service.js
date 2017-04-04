"use strict";
const starService = require('./star-service');
const RECIPES = require('./mocks').RECIPES;

class RecipeService {

    getPaginatedRecipes(recipesToPaginate, pageIndex, pageLimit) {
        let index = pageIndex && !isNaN(pageIndex) ? pageIndex : 0;
        let limit = !isNaN(pageIndex) && pageIndex ? pageLimit : 10;

        const numberOfRecipes = recipesToPaginate.length;
        const firstAssetOfPage = index * limit;
        const lastAssetOfPage = Math.min(numberOfRecipes, firstAssetOfPage + limit);

        const list = recipesToPaginate.slice(firstAssetOfPage, lastAssetOfPage);
        
        return {
            lastPage: numberOfRecipes <= lastAssetOfPage,
            list
        }
    }

    getRecipes(pageIndex, pageLimit) {
        return this.getPaginatedRecipes(RECIPES, pageIndex, pageLimit);
    }

    getRecipeDetail(recipeId, userId) {
        let recipe = RECIPES.find((recipe) => {
            return recipe.id === recipeId;
        });

        if(userId) {
            const stars = starService.getStarsForUser(userId);
            recipe.starred = false;
            if(stars.indexOf(recipe.id) !== -1) {
                recipe.starred = true;
            }
        }

        return recipe;
    }

    getSpecificRecipes(recipeIds, pageIndex, pageLimit) {
        const recipes = RECIPES.filter((recipe) => {
            return recipeIds.indexOf(recipe.id) !== -1;
        });

        return this.getPaginatedRecipes(recipes, pageIndex, pageLimit);
    }
}

module.exports = new RecipeService();