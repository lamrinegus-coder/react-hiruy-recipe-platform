function RecipeDetail({ recipe, onBack }) {
  if (!recipe) return null;

  return (
    <main className="recipe-detail-container">
      <div>
        <button
          onClick={onBack}
          className="submit-btn"
          style={{
            width: "auto",
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
          }}
        >
          &larr; Back to Home
        </button>
        <h2>{recipe.name}</h2>
      </div>

      <img src={recipe.image} alt={recipe.name} />

      <section className="recipe-section-block">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-section-block">
        <h2>Preparation Steps</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="recipe-section-block">
        <h2>Recipe Details</h2>
        <div className="table-container">
          <table className="recipe-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Servings</th>
                <th>Prep Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{recipe.category}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default RecipeDetail;
