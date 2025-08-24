import React from 'react';
import wheat1 from "./assets/images/wheat1.jpg"
import product from "./assets/images/product.jpg"
const NutritionComponent = () => {
  const nutritionData = [
    { label: 'Energy', value: '364 Kcal', icon: '⚡' },
    { label: 'Protein', value: '12g', icon: '💪' },
    { label: 'Fiber', value: '12g', icon: '🌾' },
    { label: 'Carbohydrates', value: '72g', icon: '🍞' },
    { label: 'Iron & Vitamins', value: 'Naturally present', icon: '✨' }
  ];

  const products = [
    {
      name: 'Whole Wheat Atta',
      description: 'Rich in fiber & nutrition for soft, fluffy rotis.',
      image: product,
      bgColor: 'bg-amber-100'
    },
    {
      name: 'Multigrain Atta',
      description: 'A blend of grains for health, taste, and strength.',
      image: product,
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
     

      
      <section className="relative py-20  bg-bottom overflow-hidden"
  
      >
          <img
    src={wheat1}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover scale-100"
  />
<div className="absolute inset-0">
    <div
      className="w-full h-full backdrop-blur-md"
      style={{
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskSize: "cover",
      }}
    ></div>
  </div>

        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white/90 drop-shadow-sm mb-4">
              The Chariot of Victory,
              <br />
              The Taste of Tradition
            </h1>
            <p className="text-xl text-white/90 drop-shadow-sm font-bold mb-8">
              Pure. Nutritious. Trustworthy Atta for Every Home.
            </p>
            <button className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors text-lg">
             <a href='/products'>
              Explore Products
              </a>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-800">About Vijayrath</h2>
            <p className="text-gray-700 leading-relaxed">
              Inspired by the legendary chariots of the Mahabharata, Vijayrath Atta carries forward the values of strength, truth, and tradition. Each grain is carefully milled to preserve nutrition and deliver the authentic taste of heritage.
            </p>
            <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors">
             <a href='/products'>
              Explore Products
              </a>
            </button>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-amber-200 to-orange-300 p-8 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <div className="text-4xl mb-2 text-center">🏺</div>
                <div className="text-lg font-bold text-amber-800 text-center mb-2">Vijayrath</div>
                <div className="text-sm text-gray-600 text-center bg-amber-100 px-3 py-1 rounded">
                  WHOLE WHEAT ATTA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-amber-800 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`${product.bgColor} p-4 text-center`}>
                   <img
                    src={product.image}
                    alt={product.name}
                    className="w-60 h-60 mx-auto object-contain"
                  />
                  <div className="bg-white p-4 rounded-lg shadow-inner mx-4">
                    <div className="text-lg font-bold text-amber-800 mb-1">Vijayrath</div>
                    <div className="text-sm text-gray-600 bg-amber-100 px-2 py-1 rounded">
                      {product.name.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-amber-800 mb-8">Nutrition Value</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Every 100g of Vijayrath Atta contains:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.label}</div>
                    <div className="text-amber-700 font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legacy Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-amber-800 mb-8">Our Legacy</h2>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              From fields to flour, Vijayrath represents the journey of purity, strength, and victory. 
              Rooted in Indian tradition, we bring you the same authenticity that nourished 
              generations before us, ensuring every meal carries the essence of our rich heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionComponent;