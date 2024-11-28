import axios from 'axios';

const API_ID = 'your-edamam-api-id'; // API ID ვერ ვიშოვე, ყველა ფასიანი იყო
const API_KEY = 'your-edamam-api-key';  // API key ვერ ვიშოვე, ყველა ფასიანი იყო

export async function fetchRecipes(ingredient) {
  try {
    const response = await axios.get('https://api.edamam.com/search', {
      params: {
        q: ingredient,
        app_id: API_ID,
        app_key: API_KEY,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}
