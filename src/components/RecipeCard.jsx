import React from 'react'

const RecipeCard = ({ image, title, likeCount }) => {
    return (
        <div className="recipeWrapper container mx-auto">
            {/* <div className=" w-full item-center max-w-sm rounded-lg overflow-hidden shadow-lg  p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"> */}
            <div className="flex flex-col justify-between w-full max-w-sm rounded-lg overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 h-full">

                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white truncate">

                        {title}
                    </h3>
                    <div className="flex justify-start mt-4">
                        <span className='font-bold dark:text-white'>Likes: {likeCount}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-6">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard