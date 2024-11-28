import { fetchRecipes } from './recipeFetcher.js';

document.getElementById('searchButton').addEventListener('click', async () => {
  const ingredient = document.getElementById('ingredientInput').value.trim();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!ingredient) {
    resultsContainer.innerHTML = '<p>Please enter an ingredient.</p>';
    return;
  }

  try {
    const recipes = await fetchRecipes(ingredient);
    if (recipes.length === 0) {
      resultsContainer.innerHTML = '<p>No recipes found.</p>';
      return;
    }

    recipes.forEach(({ recipe }) => {
      const recipeElement = document.createElement('div');
      recipeElement.innerHTML = `
        <h3>${recipe.label}</h3>
        <img src="${recipe.image}" alt="${recipe.label}" />
        <p><strong>Ingredients:</strong> ${recipe.ingredientLines.join(', ')}</p>
        <a href="${recipe.url}" target="_blank">View Instructions</a>
      `;
      resultsContainer.appendChild(recipeElement);
    });
  } catch (error) {
    resultsContainer.innerHTML = '<p>Error fetching recipes. Please try again later.</p>';
  }
});
