function RecipeCard({ recipe, onSelectRecipe }) {
  const badgeClass =
    recipe.category.toLowerCase() === "dinner" ? "badge-dinner" : "badge-lunch";

  return (
    <article className="recipe-card" onClick={() => onSelectRecipe(recipe)}>
      <span className={`badge ${badgeClass}`}>{recipe.category}</span>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
    </article>
  );
}

export default RecipeCard;
