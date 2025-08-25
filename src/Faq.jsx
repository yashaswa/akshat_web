import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/images/Logo.png";
const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate(); 

  const faqs = [
    {
      question: 'What is your minimum order quantity?',
      answer: 'Our minimum order quantity is 100kg (2 bags of 50kg each). For smaller quantities, please contact us to discuss available options.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we provide delivery services within a 100-km radius. Delivery charges vary based on distance and order size.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment terms including NET 30 for established customers, cash on delivery, and advance payment discounts. Credit applications are available for new commercial customers.'
    },
    {
      question: 'How do you ensure flour quality?',
      answer: 'All our flour undergoes rigorous testing including protein content, moisture levels, and contamination screening. We provide certificates of analysis with each shipment.'
    },
    {
      question: 'Can you provide custom flour blends?',
      answer: 'Yes, we offer custom blending services to meet specific requirements. Our team can work with you to develop the perfect flour blend for your applications.'
    },
    {
      question: 'What is the shelf life of your flour products?',
      answer: 'Our flour products have a shelf life of 12 months when stored in cool, dry conditions. We recommend first-in-first-out inventory rotation for best quality.'
    },
    {
      question: 'Do you offer bulk storage solutions?',
      answer: 'Yes, we can arrange bulk storage and scheduled deliveries for large-volume customers. This helps optimize your inventory management and costs.'
    },
    {
      question: 'Are your products organic certified ?',
      answer: 'We offer both conventional and organic certified flour products.'
    }
  ];

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
     
     <div className="relative z-10 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Find answers to common questions about our flour products and services. 
        If you don't find what you're looking for, feel free to contact us directly.
      </p>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
            <button
              className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-amber-600 text-xl">
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>
            </button>
            
            {openFaq === index && (
              <div className="px-6 pt-2 pb-6">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-gray-700 mb-6">
          Our experienced team is here to help with any additional questions about our products or services.
        </p>
        <button
          onClick={() => navigate("/contact")} 
          className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
    </div>
  );
};

export default FAQPage;
