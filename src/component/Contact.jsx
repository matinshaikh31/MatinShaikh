import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:matinshaikh79070@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

    // Open the default email client with the mailto link
    window.open(mailtoLink, '_blank');

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="Cointaner">
      <div className="Wrapper" id="contact">
        <div className="Title">Contact</div>
        <div className="Desc">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <div className="w-[95%] max-w-[600px] mt-10 p-6 rounded-3xl bg-slate-950 shadow-xl mb-5">
          <h1 className="text-4xl font-bold pb-6">Email Me 🚀</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-white">
             
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md bg-slate-950"
                placeholder="Enter your name"
              
                required
              />
            </div>
            <div className="mb-4 ">
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md   bg-slate-950"
                placeholder="Enter your email"
              
                
                required
              />
            </div>
            <div className="mb-4 ">
           
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md  bg-slate-950"
                placeholder="Enter the subject"
                color="#ffff"
                required
              />
            </div>
            <div className="mb-4 ">
            
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-slate-950 p-2 rounded-md"
                rows="4"
                placeholder="Enter your message"
                color="#ffff"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className=" flex gap-2 bg-purple-600 rounded-xl p-2 text-xl  cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
