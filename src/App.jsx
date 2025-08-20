import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ShoppingBag, Users, Award, Truck } from 'lucide-react';
import HomePage from './Home';
import Footer from './Footer';
import FAQPage from './Faq';
import Header from './Header';
import ContactPage from './contact';
import ProductsPage from './Product';
import AboutPage from './About';

const App = () => {

return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        
        <Header />

        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
        
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>


        <Footer />
      </div>
    </Router>
)
  
}


export default ;