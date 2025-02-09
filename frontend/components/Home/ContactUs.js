"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    // Get the response message
    const result = await response.json();
    setResponseMessage(result.message);
    setShowMessage(true);

     // Hide the message after 5 seconds
     setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    if (response.ok) {
      alert(responseMessage);
    } else {
      alert('Failed to send message. Error: ', responseMessage);
    }
  };

  return (
    <section className="bg-blue-50 dark:bg-slate-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            The best airport transfer service in Koh Samui. We provide a professional and reliable service to all our customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2"><strong>Telephone:</strong> (+66) 077-332-480</p>
            <p className="mb-2"><strong>Mobile:</strong> (+66) 084-678-0154</p>
            <p className="mb-2"><strong>Address:</strong> 64/66 Moo 4 Tambol Bophut, Amphoe Koh Sa-mui, Thailand, 84320</p>
            <p className="mb-2"><strong>Email:</strong> info@rungruangsubsamui.com</p>
            <h3 className="text-xl font-bold mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=100076740563309" className="text-blue-600" target='_blank'>Facebook</Link>
              {/* <Link href="#" className="text-blue-400">Twitter</Link> */}
              {/* <Link href="#" className="text-pink-600">Instagram</Link>
              <Link href="#" className="text-pink-600">Line Official</Link> */}
            </div>
          </div>
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Send Message
              </button>
            </form>      
          </div> */}

            <div className='m-1 p-1'>
              {showMessage && (
                <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
                  {responseMessage}
                </div>
              )}
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default ContactUs;