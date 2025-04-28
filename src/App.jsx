import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this!
import Navbar from './components/Navbar';
import Search from './components/Search';
import Recipies from './components/Recipies';
import RecipeDetails from './components/RecipesDetails'; // Create this component!

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    if (!apiKey) {
      console.error('API key is not defined');
      return;
    }

    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    setRecipes(data); // Note: `findByIngredients` returns an array directly, not inside `results`
  };

  return (
    <Router>
      <div className="w-full min-h-screen dark:bg-gray-900 bg-gray-100">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search searchQuery={fetchRecipes} />
                <Recipies recipes={recipes} />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
