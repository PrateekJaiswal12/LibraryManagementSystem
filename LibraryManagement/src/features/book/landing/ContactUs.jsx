import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Contact Us
      </h2>

      {/* Address Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-600" /> Library Address
        </h3>
        <p className="text-gray-600">
          <strong>Street:</strong> 12B, Rampur Colony, Baikunthpur <br />
          <strong>Building No:</strong> 45A <br />
          <strong>Pin Code:</strong> 497335 <br />
          <strong>City:</strong> Koriya, Chhattisgarh, India
        </p>
      </div>

      {/* Contact Numbers */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <Phone className="w-5 h-5 mr-2 text-blue-600" /> Contact Numbers
        </h3>
        <p className="text-gray-600">
          <strong>Library Telephone:</strong> +91 11 2345 6789 <br />
          <strong>Student Care:</strong> +91 90796 25292
        </p>
      </div>

      {/* Email Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <Mail className="w-5 h-5 mr-2 text-blue-600" /> Email Support
        </h3>
        <p className="text-gray-600">
          <strong>General Queries:</strong> info@library.com <br />
          <strong>Student Support:</strong> support@library.com
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
