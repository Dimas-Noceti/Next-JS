"use client";
import Link from "next/link";
import React from 'react';



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h5 className="text-lg font-bold mb-4">About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
            <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="list-none">
                <li className="mb-2">Sobre Nosotros</li>
                <li className="mb-2">Donde estamos ubicados</li>
                <li className="mb-2">Que miras</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <p>
                Address: 123 Main St, Anytown<br />
                Phone: (555) 555-1234<br />
                Email: info@example.com
              </p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;