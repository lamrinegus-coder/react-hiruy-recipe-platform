import { useState } from "react";

function AddRecipe({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Breakfast",
    ingredients: "",
    steps: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newRecipe = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      servings: Number(formData.servings) || 1,
      time: "30 minutes",
      description: "A newly created recipe.",
      image:
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&q=80",
      ingredients: formData.ingredients
        .split("\n")
        .filter((item) => item.trim() !== ""),
      steps: formData.steps.split("\n").filter((step) => step.trim() !== ""),
    };

    onAddRecipe(newRecipe);
  };

  return (
    <main className="main-container form-container">
      <div className="form-wrapper">
        <h2>Add a new Recipe</h2>
        <form className="recipe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Recipe Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Dessert</option>
              <option>Snack</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="ingredients" className="form-label">
              Ingredients (1 per line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="5"
              value={formData.ingredients}
              onChange={handleChange}
              className="form-input"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="steps" className="form-label">
              Preparation Steps (1 per line)
            </label>
            <textarea
              id="steps"
              name="steps"
              rows="5"
              value={formData.steps}
              onChange={handleChange}
              className="form-input"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="servings" className="form-label">
              Servings
            </label>
            <input
              type="number"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddRecipe;
