import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import { initialRecipes } from "./data/recipes";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("hiruy_recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : initialRecipes;
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("hiruy_recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSelectRecipe = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
    navigate("/");
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home recipes={recipes} onSelectRecipe={handleSelectRecipe} />
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail recipes={recipes} onBack={() => navigate("/")} />
          }
        />
        <Route
          path="/add"
          element={<AddRecipe onAddRecipe={handleAddRecipe} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
