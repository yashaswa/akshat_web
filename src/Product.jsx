  const ProductsPage = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Products & Services</h1>
      
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-amber-600">Our Flour Products</h2>
          <div className="space-y-6">
            {[
              {
                name: 'All-Purpose Flour',
                description: 'Versatile flour perfect for baking, cooking, and general use. Available in 5kg, 10kg, 30kg, 50kg bags.',
                protein: '10-12%'
              },
              {
                name: 'Bread Flour',
                description: 'High-protein flour ideal for bread making and yeast-based products.',
                protein: '12-14%'
              },
              {
                name: 'Cake Flour',
                description: 'Fine, low-protein flour for tender cakes and pastries.',
                protein: '7-9%'
              },
              {
                name: 'Whole Wheat Flour',
                description: 'Nutritious whole grain flour with natural fiber and nutrients intact.',
                protein: '11-13%'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-amber-600 font-medium">Protein Content: {product.protein}</p>
              </div>
            ))}
          </div>
        </div>
        
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

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Package Sizes Available</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {['5Kg Bags', '10Kg Bags', '30Kg Bags', '50Kg bags'].map((size, index) => (
            <div key={index} className="bg-white p-4 rounded text-center">
              <h3 className="font-semibold">{size}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default ProductsPage;