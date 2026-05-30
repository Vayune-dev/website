import { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted locally:", formData);
    alert("Form submitted! (We will link this to the Node.js backend next)");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    marginTop: "20px"
  };

  return (
    <div>
      <h1>Request a Consultation</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          name="companyName" 
          placeholder="Company Name" 
          value={formData.companyName} 
          onChange={handleChange} 
          required 
          style={{ padding: "10px" }}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ padding: "10px" }}
        />
        <textarea 
          name="requirement" 
          placeholder="Describe your requirements..." 
          value={formData.requirement} 
          onChange={handleChange} 
          required 
          style={{ padding: "10px", height: "100px" }}
        />
        <button type="submit" style={{ padding: "10px", background: "#007acc", color: "white", border: "none", cursor: "pointer" }}>
          Submit Request
        </button>
      </form>
    </div>
  );
}