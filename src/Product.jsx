import product from "./assets/images/product.jpg"
import logo from "./assets/images/Logo.png"
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
const ProductsPage = () => (
 
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
  
  <div className="relative z-10 container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-12">Products & Services</h1>

    
    
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      {/* Products */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-amber-600">Our Flour Products</h2>
        <div className="space-y-6">
          {[
            {
              name: 'All-Purpose Flour',
              description: 'Versatile flour perfect for baking, cooking, and general use. Available in 5kg, 10kg, 30kg, 50kg bags.',
              protein: '10-12%',
              img :product
            },
            {
              name: 'Bread Flour',
              description: 'High-protein flour ideal for bread making and yeast-based products.',
              protein: '12-14%',
              img :product
            },
            {
              name: 'Cake Flour',
              description: 'Fine, low-protein flour for tender cakes and pastries.',
              protein: '7-9%',
              img :product
            },
            {
              name: 'Whole Wheat Flour',
              description: 'Nutritious whole grain flour with natural fiber and nutrients intact.',
              protein: '11-13%',
              img :product
            }
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600 flex items-center gap-4">
              <div className="w-20 h-20 flex-shrink-0 relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  layout="fill" 
                  className="object-cover rounded-md" 
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-1 text-sm">{product.description}</p>
                <p className="text-sm text-amber-600 font-medium">Protein: {product.protein}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Services */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-amber-600">Our Services</h2>
        <div className="space-y-6">
          {[
            {
              service: 'Bulk Wholesale',
              description: 'Large quantity orders with competitive pricing for commercial buyers.'
            },
            {
              service: 'Custom Blending',
              description: 'Specialized flour blends tailored to your specific baking requirements.'
            },
            {
              service: 'Quality Testing',
              description: 'Comprehensive quality analysis and certificates for all flour batches.'
            },
            {
              service: 'Logistics Support',
              description: 'Reliable delivery scheduling and inventory management solutions.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.service}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


     <div className="my-10">
          
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

    {/* Package Sizes */}
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Package Sizes Available</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {['5Kg Bags', '10Kg Bags', '30Kg Bags', '50Kg Bags'].map((size, index) => (
          <div key={index} className="bg-white p-4 rounded text-center shadow-sm">
            <h3 className="font-semibold">{size}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
);

export default ProductsPage;
