import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Award,
  Truck,
  Users,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const wheatTypes = [
  //   {
  //     name: "Hard Red Winter Wheat",
  //     description: "High protein content, perfect for bread flour",
  //     color: "bg-gradient-to-br from-red-100 to-red-200",
  //     icon: "🌾",
  //   },
  //   {
  //     name: "Soft White Wheat",
  //     description: "Low protein, ideal for cakes and pastries",
  //     color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
  //     icon: "🌾",
  //   },
  //   {
  //     name: "Hard Red Spring Wheat",
  //     description: "Highest protein content for premium bread",
  //     color: "bg-gradient-to-br from-orange-100 to-orange-200",
  //     icon: "🌾",
  //   },
  //   {
  //     name: "Durum Wheat",
  //     description: "Perfect for pasta and semolina flour",
  //     color: "bg-gradient-to-br from-amber-100 to-amber-200",
  //     icon: "🌾",
  //   },
  //   {
  //     name: "Soft Red Winter Wheat",
  //     description: "Versatile wheat for all-purpose flour",
  //     color: "bg-gradient-to-br from-rose-100 to-rose-200",
  //     icon: "🌾",
  //   },
  // ];

  const wheatTypes = [
    "images/wheat1.jpg",
    "images/wheat2.jpg",
    "images/wheat3.jpg",
    "images/wheat4.jpg",
    "images/wheat5.jpg",
  ];

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
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Premium Flour Wholesale
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Delivering the finest quality flour products to bakeries,
            restaurants, and food manufacturers across the region.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Get Quote Today
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ABC Flour?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="text-amber-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Our flour undergoes rigorous quality testing to ensure consistent
              excellence in every batch.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="text-amber-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Reliable delivery network ensuring your flour arrives fresh and on
              time, every time.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="text-amber-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Our experienced team provides personalized service and flour
              expertise to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Wheat Types Carousel Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Premium Wheat Varieties
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-80">
                {/* Carousel Content */}
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {wheatTypes.map((image, index) => (
                    <div key={index} className="min-w-full h-80">
                      <img
                        src={image}
                        alt={`Wheat ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="text-amber-600" size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="text-amber-600" size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {wheatTypes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? "bg-amber-600 scale-125"
                          : "bg-gray-400 hover:bg-amber-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-amber-600 text-3xl mb-3">🔬</div>
                <h4 className="font-semibold text-lg mb-2">Quality Testing</h4>
                <p className="text-gray-600 text-sm">
                  Every wheat variety is tested for protein content, moisture
                  levels, and purity standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-amber-600 text-3xl mb-3">🚜</div>
                <h4 className="font-semibold text-lg mb-2">Farm Fresh</h4>
                <p className="text-gray-600 text-sm">
                  Sourced directly from premium farms across the grain belt
                  regions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-amber-600 text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-lg mb-2">Fresh Milling</h4>
                <p className="text-gray-600 text-sm">
                  Milled to order ensuring maximum freshness and optimal
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "All-Purpose Flour",
              "Bread Flour",
              "Cake Flour",
              "Whole Wheat Flour",
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="bg-amber-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="font-semibold text-lg">{product}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
