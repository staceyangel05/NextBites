import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">WELCOME TO NEXTBITES</span>

          <h1>
            Discover Food.
            <br />
            <span>Discover Happiness.</span>
          </h1>

          <p>
            Explore delicious recipes from around the world.
            Find your next favourite meal and start cooking today.
          </p>

          <a href="#recipes" className="hero-button">
            Explore Recipes →
          </a>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="recipes-section">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Explore Our Recipes</h2>
          <p>Something delicious for every occasion.</p>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About NextBites</h2>
        <p>
          NextBites helps food lovers discover exciting recipes
          and explore different cuisines from around the world.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 NextBites. Made with ❤️ for food lovers.</p>
      </footer>
    </main>
  );
}