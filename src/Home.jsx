// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import {
//   Award,
//   Truck,
//   Users,
//   ShoppingBag,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
import wheat1 from "./assets/images/win1.jpg";
import wheat2 from "./assets/images/win2.png";
import wheat3 from "./assets/images/wheat13.jpg";
import wheat4 from "./assets/images/win4.jpg";
import wheat5 from "./assets/images/win5.png";
import bagi from "./assets/images/bagi.webp";
import mill from "./assets/images/mill2.png"
import roti from "./assets/images/roti.png"
import wheat from "./assets/images/wheatp.png"
import logo from "./assets/images/Logo.png"



import { useState, useEffect } from "react";
import { Link } from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample wheat/flour images - you can replace with your actual images
  const wheatTypes = [wheat1, wheat2, wheat3, wheat4, wheat5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % wheatTypes.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [wheatTypes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % wheatTypes.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + wheatTypes.length) % wheatTypes.length
    );
  };

  return (
  <div className="relative min-h-screen">
    
    {/* Watermark background logo */}
    <div 
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <img 
        src={logo} 
        alt="Watermark Logo" 
        className="w-[600px] opacity-10 select-none"
      />
    </div>
  
  <div className="relative z-10 container mx-auto"></div>

    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section with Traditional Design */}
     <section className="relative overflow-hidden">
    {/* Background Image */}
    <img
      src={bagi}
      alt="Vijayrath Background"
      className="absolute inset-0 w-full h-full object-cover md:object-cover sm:object-contain sm:scale-40 max-sm:object-[35%_center] animate-bgMove"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 opacity-40"></div>

    {/* Content */}
    <div className="relative container mx-auto px-6 py-14 text-center z-10">
      {/* Brand Title */}
      <h1 className="text-5xl md:text-8xl font-extrabold text-amber-900 mb-4 tracking-wider drop-shadow-lg">
        VIJAYRATH
      </h1>
      <div className="text-2xl md:text-4xl text-amber-800 font-semibold mb-2 tracking-wide">
        FLOUR
      </div>
      <div className="text-lg md:text-xl text-amber-700 mb-10 font-bold tracking-wide">
        शक्ति और स्वाद का रथ
      </div>

      {/* Premium Badge */}
      <div className="inline-block bg-amber-900 text-amber-100 px-10 py-4 rounded-full text-2xl font-bold mb-10 shadow-xl tracking-wide">
        100% शुद्ध चक्की आटा
      </div>

      {/* Impact Statement */}
      <p className="text-2xl md:text-3xl text-white font-extrabold mb-14 max-w-2xl mx-auto leading-relaxed bg-amber-900 px-6 py-4 rounded-xl shadow-lg">
        EVERY 100KG SOLD = 1 KG DONATED
      </p>

      {/* Features */}
      <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <span className="text-3xl w-12 h-12"><img src = {mill}/></span>
          </div>
          <span className="text-white font-semibold text-lg">Stone Ground</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-amber-800 rounded-full flex justify-center  mb-3 shadow-lg">
            <span className="text-3xl w-12 h-12"><img  src = {wheat}/></span>
          </div>
          <span className="text-white font-semibold text-lg">No Maida</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <span className="text-3xl w-12 h-12"><img src = {roti}/></span>
          </div>
          <span className="text-white font-semibold text-lg">Soft Rotis</span>
        </div>
      </div>

      {/* CTA Button */}
      <a href="/contact">
        <button className="inline-block bg-amber-800 text-amber-100 px-14 py-5 rounded-xl text-2xl font-bold hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer">
          Order Premium Flour
        </button>
      </a>
    </div>
  </section>

      {/* Wheat Varieties Carousel */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Premium Wheat Varieties
            </h2>
            <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Carefully selected grains from the best farming regions
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-200">
              <div className="relative h-96">
                {/* Carousel Content */}
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {wheatTypes.map((image, index) => (
                    <div key={index} className="min-w-full h-96 relative">
                      <img
                        src={image}
                        alt={`Premium Wheat ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          Premium Grade Wheat
                        </h3>
                        <p className="text-amber-200">
                          Naturally grown, stone ground to perfection
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-xl transition-all duration-200 hover:scale-110"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    ←
                  </div>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-xl transition-all duration-200 hover:scale-110"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    →
                  </div>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {wheatTypes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-amber-500 scale-125 shadow-lg"
                          : "bg-white/60 hover:bg-amber-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Process Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔬</div>
                <h4 className="font-bold text-xl mb-3 text-amber-900">
                  Quality Testing
                </h4>
                <p className="text-amber-700">
                  Every grain tested for protein content, moisture levels, and
                  purity standards to ensure premium quality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🚜</div>
                <h4 className="font-bold text-xl mb-3 text-amber-900">
                  Farm Fresh
                </h4>
                <p className="text-amber-700">
                  Sourced directly from trusted farmers across India's premium
                  wheat-growing regions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">⚡</div>
                <h4 className="font-bold text-xl mb-3 text-amber-900">
                  Fresh Milling
                </h4>
                <p className="text-amber-700">
                  Traditional stone grinding preserves natural oils and
                  nutrients for maximum flavor and health benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Process
            </h2>
            <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              At Vijay Rath, we believe great taste begins with the finest
              grains. That’s why we use only the best quality{" "}
              <span className="font-bold text-amber-900">Lokwan wheat</span>,
              known for its rich taste and high nutrition.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-amber-600">
            <p className="text-amber-700 text-lg leading-relaxed mb-6">
               The process starts
              with careful selection and grading of wheat, followed by
              multi-stage cleaning to remove dust, stones, and impurities. The
              grains are then conditioned with the right amount of water to
              soften the bran and prepare them for grinding. Using advanced
              chakki mills, the wheat is ground slowly and naturally to preserve
              its fiber, protein, and essential nutrients. Finally, the atta is
              sifted for perfect texture and hygienically packed to lock in
              freshness. The result is soft, fluffy rotis that carry the purity
              and goodness of Vijay Rath Lokwan Atta.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Premium Products
            </h2>
            <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              From traditional chapati flour to specialty blends, we have
              everything for your kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "All-Purpose Flour",
                desc: "Perfect for daily cooking",
                icon : roti,
              },
              {
                name: "Bread Flour",
                desc: "High gluten for perfect bread",
                icon: "🍞",
              },
              {
                name: "Cake Flour",
                desc: "Fine texture for delicate baking",
                icon: "🎂",
              },
              {
                name: "Whole Wheat Flour",
                desc: "Complete nutrition in every grain",
                icon: wheat,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-4 border-amber-500"
              >
          <div className="text-5xl mb-4">
  {product.icon.startsWith("/") ? ( 
    <img src={product.icon} alt={product.name} className="w-12 h-12 mx-auto" />
  ) : (
    <span>{product.icon}</span> 
  )}
</div>
                <h3 className="font-bold text-xl mb-3 text-amber-900">
                  {product.name}
                </h3>
                <p className="text-amber-700 mb-4">{product.desc}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer">
              <a href="/products">Explore All Products</a>
            </button>
          </div>
        </div>
      </section>

      {/* Traditional Footer Banner */}
    </div>
    </div>
  );
};

export default HomePage;
