  
  import { Link } from "react-router-dom";
import { ShoppingBag, Phone, Mail, MapPin } from "lucide-react"; 

const navigation = [
  { id: "home", name: "Home", path: "/" },
  { id: "products", name: "Products", path: "/products" },
  { id: "about", name: "About Us", path: "/about" },
  { id: "faq", name: "FAQ", path: "/faq" },
  { id: "contact", name: "Contact", path: "/contact" },
];
  
 const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 mt-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-amber-600 text-white p-2 rounded-full">
              <ShoppingBag size={20} />
            </div>
            <h3 className="text-xl font-bold">ABC Flour</h3>
          </div>
          <p className="text-gray-300">
            Your trusted partner for premium flour wholesale solutions across the region.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-gray-300">info@abcflour.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-gray-300">123 Flour Street, City, State</span>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
          <div className="text-gray-300 space-y-1">
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-300">
          © 2025 ABC Flour Wholesale. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

