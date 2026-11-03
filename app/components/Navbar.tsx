import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link href="/" className="logo">
          🍽️ NextBites
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#recipes">Explore Recipes</Link>
          <Link href="#about">About</Link>
        </div>

        <Link href="#recipes" className="nav-button">
          Find Recipes →
        </Link>

      </div>
    </nav>
  );
}