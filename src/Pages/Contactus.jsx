import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center w-full px-4 py-10 gap-20 bg-white">
      {/* Contact Info Section */}
      <div className="w-full md:w-[30%] justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contact Info
        </h1>
        <div className="bg-gray-200 rounded-lg shadow-lg p-8 justify-center items-center text-center">
          {/* Address */}
          <div className="flex items-center mb-6 text-center justify-center">
            <FaMapMarkerAlt className="text-blue-500 text-6xl mr-2" />
            <p className="text-gray-700 leading-relaxed text-xl font-semibold text-wrap">
              1104, 11th floor, Ruby Crescent Business Boulevard, Ashok Chakravarti Rd,
              Kandivali, Ashok Nagar, Kandivali East, Mumbai, Maharashtra 400101
            </p>
          </div>
          {/* Phone */}
          <div className="flex items-center mb-6">
            <AiFillPhone className="text-blue-500 text-4xl mr-12" />
            <a href="tel:+919076907642" className="text-gray-700 font-semibold hover:underline text-xl">
              +91 9076 9076 42
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center mb-6">
            <AiOutlineMail className="text-blue-500 text-4xl mr-12" />
            <a href="mailto:info@pestobazaar.com" className="text-gray-700 font-semibold hover:underline text-xl">
              info@pestobazaar.com
            </a>
          </div>
          {/* Website */}
          <div className="flex items-center mb-6">
            <FaGlobe className="text-blue-500 text-4xl mr-12" />
            <a
              href="https://www.pestobazaar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-semibold hover:underline text-xl"
            >
              www.pestobazaar.com
            </a>
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-blue-500 text-3xl mt-4">
            <FaFacebook className="hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FaWhatsappSquare className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Our Location
        </h1>
        <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3873013677403!2d72.84887097425795!3d19.30899304461867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02b2d5c65cb%3A0xe2f32eb9fb1839ed!2sNirmala%20Niketan%20High%20School!5e0!3m2!1sen!2sin!4v1732011957419!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
