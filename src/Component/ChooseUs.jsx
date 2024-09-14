import {
  FaClock,
  FaCalendarAlt,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className="bg-gray-100 py-6">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaClock className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Real-Time Availability</h3>
          <p className="text-gray-600">
            Check room availability in real-time and book instantly.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaCalendarAlt className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
          <p className="text-gray-600">
            Choose a time that works best for you, and we’ll handle the rest.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaHeadset className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Our support team is here for you any time, day or night.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Instant Confirmation</h3>
          <p className="text-gray-600">
            Receive booking confirmation instantly for a hassle-free experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
