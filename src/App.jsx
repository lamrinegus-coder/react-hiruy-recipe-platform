import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import { initialRecipes } from "./data/recipes";
import "./App.css";

function App() {
  // 1. Initialize state from localStorage, fallback to initialRecipes if empty
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("hiruy_recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : initialRecipes;
  });

  const [currentView, setCurrentView] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // 2. Save recipes to localStorage whenever the recipes state updates
  useEffect(() => {
    localStorage.setItem("hiruy_recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentView("detail");
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
    setCurrentView("home");
  };

  return (
    <div>
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === "home" && (
        <Home recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      )}

      {currentView === "detail" && (
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setCurrentView("home")}
        />
      )}

      {currentView === "add" && <AddRecipe onAddRecipe={handleAddRecipe} />}

      <Footer />
    </div>
  );
}

export default App;
