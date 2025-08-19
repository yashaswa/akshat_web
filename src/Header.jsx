import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

const navigation = [
  { id: "home", name: "Home", path: "/" },
  { id: "products", name: "Products", path: "/products" },
  { id: "about", name: "About", path: "/about" },
  { id: "faq", name: "FAQ", path: "/faq" },
  { id: "contact", name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-amber-600 text-white p-3 rounded-full">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">ABC Flour</h1>
            <p className="text-sm text-gray-600">Wholesale Excellence</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-amber-600 text-white"
                    : "text-gray-700 hover:bg-amber-100 hover:text-amber-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-amber-100 hover:text-amber-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
