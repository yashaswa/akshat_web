import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react"; // ✅ lucide-react icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-amber-600">
            Get In Touch
          </h2>
          <p className="text-gray-700 mb-8">
            Ready to partner with us for your flour needs? Get in touch today
            for quotes, product information, or any questions about our
            services.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin className="text-amber-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Flour Street
                  <br />
                  Industrial District
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Phone className="text-amber-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Toll Free: 1-800-ABC-FLOUR</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail className="text-amber-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@abcflour.com</p>
                <p className="text-gray-600">sales@abcflour.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Business Hours</h3>
            <div className="space-y-1 text-gray-700">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-amber-600">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your flour requirements, quantity needs, or any questions..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
