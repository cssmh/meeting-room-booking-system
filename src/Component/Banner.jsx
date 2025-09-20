import { Link } from "react-router-dom";
import bg from "../assets/genious.png";

const Banner = () => {
  return (
    <div className="relative h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex items-center">
        <div className="w-full lg:w-1/2 text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 bg-opacity-80 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Premium Meeting Solutions
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-300">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Ideal Meeting Room</span> with Ease
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed animate-fade-in-up animation-delay-600">
            Efficient, hassle-free room booking for all your meeting needs.
            <span className="block mt-2 text-lg">Experience seamless scheduling and world-class facilities.</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900">
            <Link
              to="/meeting-rooms"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white border-opacity-50 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 ease-out backdrop-blur-sm bg-white bg-opacity-10"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 animate-fade-in-up animation-delay-1200">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-sm text-blue-200">Bookings Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-sm text-blue-200">Premium Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center pl-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src={bg}
              alt="Modern Meeting Room"
              className="relative object-cover h-[500px] w-[400px] rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 ease-out"
            />

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white text-sm font-medium">Available Now</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 animate-float animation-delay-1000">
              <div className="text-white">
                <div className="text-lg font-bold">Premium Suite</div>
                <div className="text-sm opacity-80">12 Person Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
