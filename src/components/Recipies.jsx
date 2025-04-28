import React from 'react'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom';


const Recipies = ({ recipes }) => {
    return (
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 item-center p-5">
            {
                recipes.map((recipe, index) => (
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                        <RecipeCard
                            key={index}
                            image={recipe.image}
                            title={recipe.title}
                            likeCount={recipe.likes}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Recipies