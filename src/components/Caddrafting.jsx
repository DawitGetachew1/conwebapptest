import React, { useState } from "react";
import "../css/OrderPage.css"; // Import custom CSS for the page

const OrderPage = () => {
  const [phoneRequestForm, setPhoneRequestForm] = useState({
    name: "",
    phone: "",
  });

  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectName: "",
    projectType: "Building",
    services: [],
    message: "",
    files: [""],
  });

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setPhoneRequestForm({ ...phoneRequestForm, [name]: value });
  };

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    let updatedServices = [...orderForm.services];
    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter((service) => service !== value);
    }
    setOrderForm({ ...orderForm, services: updatedServices });
  };

  const handleFileChange = (index, e) => {
    const newFiles = [...orderForm.files];
    newFiles[index] = e.target.files[0];
    setOrderForm({ ...orderForm, files: newFiles });
  };

  const addNewFileInput = () => {
    setOrderForm({ ...orderForm, files: [...orderForm.files, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Request Submitted:", phoneRequestForm);
    console.log("Order Submitted:", orderForm);
  };

  return (
    <div className="order-page">
      <h1>Architectural Design CAD Drafting Works</h1>
      <p>Fill the forms and order us. Let us do your drafting works!</p>

      <section className="order-form">
        <h3>ORDER PAGE</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              value={orderForm.name}
              onChange={handleOrderChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={orderForm.phone}
              onChange={handleOrderChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={orderForm.email}
              onChange={handleOrderChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Project Name:</label>
            <input
              type="text"
              name="projectName"
              value={orderForm.projectName}
              onChange={handleOrderChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Project Type:</label>
            <select name="projectType" value={orderForm.projectType} onChange={handleOrderChange}>
              <option value="Building">Building</option>
              <option value="Landscape">Landscape</option>
              <option value="Furniture">Furniture</option>
              <option value="As Built">As Built</option>
            </select>
          </div>
          <div className="form-group">
            <label>Services You Need:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value="CAD Drafting Service"
                  onChange={handleServiceChange}
                />{" "}
                CAD Drafting Service
              </label>
              <label>
                <input
                  type="checkbox"
                  value="3D Modeling"
                  onChange={handleServiceChange}
                />{" "}
                3D Modeling
              </label>
            </div>
          </div>
          <div className="form-group">
  <label>Tell us what's on your mind:</label>
  <textarea
    name="message"
    value={orderForm.message}
    onChange={handleOrderChange}
    rows="5"
    placeholder="Your message..."
  />
</div>



          <div className="file-upload">
            <label>Upload Your Documents:</label>
            {orderForm.files.map((file, index) => (
              <div key={index} className="file-input-group">
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e)}
                />
              </div>
            ))}
            <button type="button" onClick={addNewFileInput} className="add-file-btn">
              Add +
            </button>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>

        <p>OR</p>

        <section className="social-media-links">
          <h4>Send your files through our social media platform:</h4>
          <button className="social-btn">Telegram</button>
          <button className="social-btn">WhatsApp</button>
        </section>

        <h4>Thank you for choosing us. We will call you for further details.</h4>
        <button className="call-now-btn">CALL US NOW</button>
      </section>
    </div>
  );
};

export default OrderPage;
