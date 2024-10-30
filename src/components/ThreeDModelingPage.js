import React, { useState } from 'react';
// import "../AutoCADDraftingServices.css";
 // Make sure to update the CSS file path if needed

const ThreeDModelingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] hero-section">
        <div className="absolute inset-0 bg-[url('https://yourbackground.jpg')] opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              3D Modeling Services
            </h1>
            <h3 className="text-xl text-gray-200">
              Bringing your concepts to life with stunning realism
            </h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 services-container">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                High-Quality 3D Modeling Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At TiruSera, we specialize in delivering high-quality 3D Modeling services that bring your concepts to life with stunning realism. Whether you have initial sketches, CAD files, or existing 3D renderings, our skilled team will transform your ideas into intricate 3D models tailored to your specifications. We utilize advanced software to ensure precision and detail in every project, allowing you to visualize your designs from every angle. Let us handle the technical aspects while you focus on refining your vision!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Simply fill out the forms and place your order—let's create something exceptional together!
              </p>
            </div>

            {/* Contact Form */}
            <div className="form-container">
              <h3 className="text-2xl font-semibold mb-6">Request a Phone Call</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="btn-newcustom"
                  >
                    Submit
                  </button>
                  <a
                    href="tel:+YOUR_PHONE_NUMBER"
                    className="btn-newcustom"
                  >
                    Call Us Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">View Sample Screenshots of 3D Modeling Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="work-card flex flex-col items-center"> {/* Center items in card */}
                <div className="w-full flex justify-center"> {/* Center image horizontally */}
                  <img 
                    src={`/img/sample3D${item}.jpg`} // Adjust the path to your actual image location
                    alt={`Sample 3D Model ${item}`}
                    className="h-48 object-cover work-image" /* Use work-image class for styling */
                  />
                </div>
                <div className="p-6 text-center"> {/* Center-align text under image */}
                  <h3 className="font-semibold text-lg mb-2">Sample Project {item}</h3>
                  <h2 className="text-gray-600">
                    Detailed 3D model showcasing precision and creativity.
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">TiruSera</h4>
              <p className="text-gray-400">
                Professional 3D modeling services for all your design needs.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: ethiooutsourcing@gmail.com<br />
                Phone: +251 978783334,<br />
                Phone: +251 0901571414<br />
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TiruSera. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThreeDModelingPage;