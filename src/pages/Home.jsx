import RecipeCard from "../components/RecipeCard";

function Home({ recipes, onSelectRecipe }) {
  return (
    <main className="main-container">
      <div className="welcome-container">
        <h2>Welcome to Hiruy Recipe Platform</h2>
        <p>
          Discover, share, and enjoy delicious home-cooked meals from around the
          world.
        </p>
      </div>

      <h2 className="section-title">Featured Recipes</h2>
      <section className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelectRecipe={onSelectRecipe}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
