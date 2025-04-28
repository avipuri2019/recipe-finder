import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipesDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                    params: { apiKey },
                });
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if (loading) {
        return <div className="text-center p-6">Loading recipe details...</div>;
    }

    if (!recipe) {
        return <div className="text-center p-6 text-red-500">Recipe not found.</div>;
    }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <Link to="/" className="text-blue-500 hover:underline">&larr; Back to search</Link>

            <h1 className="text-3xl font-bold my-4">{recipe.title}</h1>

            <img src={recipe.image} alt={recipe.title} className="rounded-lg shadow-md mb-6 w-full" />

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }} className="text-gray-700 dark:text-gray-300"></p>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {recipe.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: recipe.instructions || 'No instructions available.' }}></p>
            </div>
        </div>
    );
};

export default RecipesDetails;
