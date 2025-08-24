import { Users } from "lucide-react";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-12">VijayRath Foods</h1>

    <div className="max-w-4xl mx-auto space-y-12">
      
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6 text-amber-600">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded in 2025, VijayRath Foods has been a trusted name in the wholesale flour industry .
          What started as a small family business has grown into a regional leader, serving bakeries, restaurants,
          and food manufacturers across the country with premium quality flour products.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-600">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            To provide the highest quality flour products to our customers while maintaining competitive pricing
            and exceptional service. We are committed to supporting the success of businesses in the food industry
            through reliable supply chains and expert guidance.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">Our Values</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Quality Excellence in every product</li>
            <li>• Reliable service and on-time delivery</li>
            <li>• Competitive and transparent pricing</li>
            <li>• Strong customer relationships</li>
            <li>• Continuous improvement and innovation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-600">Why Choose Us</h3>
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg"> Years Of Knowledge</h4>
              <p className="text-gray-600">Deep industry knowledge and proven track record.</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg">Quality Assurance</h4>
              <p className="text-gray-600">Rigorous testing and quality control processes.</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg">Customer Support</h4>
              <p className="text-gray-600">Dedicated team providing expert guidance and support.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 p-8 rounded-lg ">
        <h3 className="text-2xl font-semibold mb-6 text-center text-amber-600">Our Team</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Tejesh Yadav", role: "Founder & CEO", experience: "Experience in flour industry" },
            { name: "Akshat Agrawal", role: "Founder & COO", experience: "Food science expert" },
            
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center">
              <div className="bg-amber-200 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-amber-600" size={24} />
              </div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-amber-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-600">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default AboutPage;