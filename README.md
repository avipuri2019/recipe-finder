
# Recipe Finder

A simple web app that helps users find recipes based on ingredients using the Spoonacular API. This app provides an intuitive search functionality where users can enter ingredients, and it returns a list of recipes that can be made with those ingredients.

## Demo
https://recipe-finder-nine-phi.vercel.app/

## Features

- **Search recipes by ingredients:** Enter ingredients you have, and the app will display a list of recipes you can make.
- **Responsive UI:** Built with React, TailwindCSS, and Vite for a fast and responsive user interface.
- **API Integration:** Utilizes the Spoonacular API to fetch recipe details.

## Tech Stack

- **Frontend:** React, TailwindCSS
- **API:** Spoonacular API (for recipes)
- **State Management:** React hooks
- **Routing:** React Router for page navigation
- **Build Tool:** Vite for fast development and build process
- **ESLint for linting** to ensure code quality

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version >= 18)
- [Vite](https://vitejs.dev/)

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd recipe-finder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your Spoonacular API key:
   
   - Go to [Spoonacular API](https://spoonacular.com/food-api) and create an account to get your API key.
   - Create a `.env` file in the root of the project and add your API key:
   
   ```bash
   REACT_APP_SPOONACULAR_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code with ESLint.
- `npm run preview`: Preview the production build.

## Dependencies

### Frontend Libraries
- **@heroicons/react:** Provides access to Tailwind CSS-compatible icons.
- **@tailwindcss/vite:** Vite plugin for Tailwind CSS.
- **axios:** For making HTTP requests to the Spoonacular API.
- **react, react-dom, react-router-dom:** Core React libraries and routing.

### Development Tools
- **vite:** Build tool for fast development.
- **eslint:** Linter for maintaining code quality.

## Folder Structure

```
/src
  /components        # Reusable components like Navbar, RecipeCard, RecipesDetails, Recipes,Search etc.
  App.jsx             # Main React component.
  main.jsx           # Entry point for the React app.
```

## Usage

1. **Search Recipes:**
   - Enter ingredients in the search bar (e.g., chicken, tomato, cheese).
   - The app will fetch matching recipes from Spoonacular and display them in a list.
   
2. **Recipe Details:**
   - Clicking on a recipe shows detailed information, such as ingredients, preparation steps, and more.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for providing the recipe data.
- [Vite](https://vitejs.dev/) for its fast development environment.

