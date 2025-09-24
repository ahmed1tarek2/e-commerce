"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Optional: for post-submit navigation

const CheckoutPage: React.FC = () => {
  // Sample product data (replace with props or data from cart/localStorage)
  const [product] = useState({
    id: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', // Placeholder image
    title: 'Sample Product',
    description: 'A high-quality sample product with great features.',
    price: 29.99, // Price per unit
  });

  // State for quantity and total
  const [quantity, setQuantity] = useState(1);
  const totalPrice = product.price * quantity;

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'Credit Card', // Default
  });

  // Handle quantity changes
  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change)); // Min quantity 1
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.address || !formData.city) {
      alert('Please fill in all required fields.');
      return;
    }
    // Log data (replace with API call)
    console.log('Order Data:', { ...formData, product, quantity, total: totalPrice });
    alert('Order confirmed! Check console for details.');
    // Optional: Navigate to success page
    // router.push('/order-success');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Details Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-2xl font-bold text-gray-900 mt-4">${product.price.toFixed(2)}</p>
                
                {/* Quantity Selector */}
                <div className="flex items-center mt-4">
                  <h4 className="font-medium mr-4">Quantity:</h4>
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
                    disabled={quantity <= 1}
                  >
                    –
                  </button>
                  <span className="bg-white border-t border-b px-4 py-1">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({quantity} item):</span>
                <span>${(product.price * quantity).toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="font-bold">Total:</span>
                <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Shipping & Payment</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
            
            {/* Checkout Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#35AFA0] text-white py-3 px-6 rounded-md font-medium hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#35AFA0] transition duration-200"
              >
                Confirm Order - ${totalPrice.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
