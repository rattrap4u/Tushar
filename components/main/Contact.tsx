"use client"; // Ensure this is a client component

import React, { useState } from 'react';

const ContactUs = () => {
    interface FormData {
        name: string;
        contactNumber: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: '',
        contactNumber: '',
        email: '',
        message: '',
    });
    
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // If the field is contactNumber, only allow digits
        if (name === 'contactNumber') {
            // Check if the input is a valid digit or empty
            if (/^\d*$/.test(value)) {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, contactNumber: '' }); // Clear any existing error
            } else {
                setErrors({ ...errors, contactNumber: 'Please enter your contact number' });
            }
        } else {
            setFormData({ ...formData, [name]: value });
            // Clear any existing error for other fields
            if (name in errors) {
                setErrors({ ...errors, [name]: '' });
            }
        }
    };
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        
        if (!formData.name) newErrors.name = 'Name is required';
        
        // Validate contact number
        if (!formData.contactNumber) {
            newErrors.contactNumber = 'Contact number is required';
        } else if (!/^\d+$/.test(formData.contactNumber)) { // Check if it contains only digits
            newErrors.contactNumber = 'Contact number must be numeric';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        
        if (!formData.message) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Message sent successfully!');
                // Reset form...
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div id='contact' className="w-auto bg-slate-900 text-white rounded-md max-w-md mx-auto p-4 mb-5 ml-2 mr-2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`border text-black p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                    <label className="block mb-1">Contact Number</label>
                    <input 
                        type="tel" 
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className={`border text-black p-2 w-full ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                    {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
                </div>

                <div>
                    <label className="block mb-1">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`border text-black p-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <label className="block mb-1">Message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`border text-black p-2 w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;