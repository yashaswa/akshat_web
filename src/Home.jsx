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
import wheat1 from "./assets/images/wheat1.jpg";
import wheat2 from "./assets/images/wheat2.jpg";
import wheat3 from "./assets/images/wheat13.jpg";
import wheat4 from "./assets/images/wheat4.jpg";
import wheat5 from "./assets/images/wheat5.jpg";
import bagi from "./assets/images/bagi.webp";

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // const wheatTypes = [
//   //   {
//   //     name: "Hard Red Winter Wheat",
//   //     description: "High protein content, perfect for bread flour",
//   //     color: "bg-gradient-to-br from-red-100 to-red-200",
//   //     icon: "🌾",
//   //   },
//   //   {
//   //     name: "Soft White Wheat",
//   //     description: "Low protein, ideal for cakes and pastries",
//   //     color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
//   //     icon: "🌾",
//   //   },
//   //   {
//   //     name: "Hard Red Spring Wheat",
//   //     description: "Highest protein content for premium bread",
//   //     color: "bg-gradient-to-br from-orange-100 to-orange-200",
//   //     icon: "🌾",
//   //   },
//   //   {
//   //     name: "Durum Wheat",
//   //     description: "Perfect for pasta and semolina flour",
//   //     color: "bg-gradient-to-br from-amber-100 to-amber-200",
//   //     icon: "🌾",
//   //   },
//   //   {
//   //     name: "Soft Red Winter Wheat",
//   //     description: "Versatile wheat for all-purpose flour",
//   //     color: "bg-gradient-to-br from-rose-100 to-rose-200",
//   //     icon: "🌾",
//   //   },
//   // ];

//   const wheatTypes = [
//    wheat1,wheat2,wheat3,wheat4,wheat5,
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % wheatTypes.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [wheatTypes.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % wheatTypes.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + wheatTypes.length) % wheatTypes.length
//     );
//   };
//   return (
//     <div className="space-y-16">
//       <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold text-gray-800 mb-6">
//             Premium Flour Wholesale
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Delivering the finest quality flour products to bakeries,
//             restaurants, and food manufacturers across the region.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
//           >
//             Get Quote Today
//           </Link>
//         </div>
//       </section>

//       <section className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Why Choose ABC Flour?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center p-6 rounded-lg bg-white shadow-lg">
//             <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//               <Award className="text-amber-600" size={32} />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
//             <p className="text-gray-600">
//               Our flour undergoes rigorous quality testing to ensure consistent
//               excellence in every batch.
//             </p>
//           </div>

//           <div className="text-center p-6 rounded-lg bg-white shadow-lg">
//             <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//               <Truck className="text-amber-600" size={32} />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
//             <p className="text-gray-600">
//               Reliable delivery network ensuring your flour arrives fresh and on
//               time, every time.
//             </p>
//           </div>

//           <div className="text-center p-6 rounded-lg bg-white shadow-lg">
//             <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//               <Users className="text-amber-600" size={32} />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
//             <p className="text-gray-600">
//               Our experienced team provides personalized service and flour
//               expertise to meet your needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Wheat Types Carousel Section */}
//       <section className="bg-gradient-to-r from-amber-50 to-yellow-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//             Premium Wheat Varieties
//           </h2>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//               <div className="relative h-80">
//                 {/* Carousel Content */}
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out h-full"
//                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                   {wheatTypes.map((image, index) => (
//                     <div key={index} className="min-w-full h-80">
//                       <img
//                         src={image}
//                         alt={`Wheat ${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Navigation Arrows */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
//                 >
//                   <ChevronLeft className="text-amber-600" size={24} />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
//                 >
//                   <ChevronRight className="text-amber-600" size={24} />
//                 </button>

//                 {/* Slide Indicators */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                   {wheatTypes.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                         index === currentSlide
//                           ? "bg-amber-600 scale-125"
//                           : "bg-gray-400 hover:bg-amber-400"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Additional Info Cards */}
//             <div className="grid md:grid-cols-3 gap-6 mt-8">
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="text-amber-600 text-3xl mb-3">🔬</div>
//                 <h4 className="font-semibold text-lg mb-2">Quality Testing</h4>
//                 <p className="text-gray-600 text-sm">
//                   Every wheat variety is tested for protein content, moisture
//                   levels, and purity standards.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="text-amber-600 text-3xl mb-3">🚜</div>
//                 <h4 className="font-semibold text-lg mb-2">Farm Fresh</h4>
//                 <p className="text-gray-600 text-sm">
//                   Sourced directly from premium farms across the grain belt
//                   regions.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="text-amber-600 text-3xl mb-3">⚡</div>
//                 <h4 className="font-semibold text-lg mb-2">Fresh Milling</h4>
//                 <p className="text-gray-600 text-sm">

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               "All-Purpose Flour",
//               "Bread Flour",
//               "Cake Flour",
//               "Whole Wheat Flour",
//             ].map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//               >
//                 <div className="bg-amber-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
//                   <ShoppingBag size={24} />
//                 </div>
//                 <h3 className="font-semibold text-lg">{product}</h3>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <Link
//               to="/products"
//               className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
//             >
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

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
            <span className="text-3xl">🏺</span>
          </div>
          <span className="text-amber-800 font-semibold text-lg">Stone Ground</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <span className="text-3xl">🌾</span>
          </div>
          <span className="text-amber-800 font-semibold text-lg">No Maida</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <span className="text-3xl">🥖</span>
          </div>
          <span className="text-amber-800 font-semibold text-lg">Soft Rotis</span>
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
                icon: "🥖",
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
                icon: "🌾",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-4 border-amber-500"
              >
                <div className="text-5xl mb-4">{product.icon}</div>
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
  );
};

export default HomePage;
