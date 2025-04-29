import React from 'react';
import { Code2, Server, Cloud, Shield } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
              alt="Professional headshot"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
           
