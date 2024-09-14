import { FaCheckCircle } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ItWorks = () => {
  return (
    <div className="py-6 px-8 bg-gray-100">
      <section className="mb-5 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center text-center max-w-xs">
            <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Select a Room</h3>
            <p className="text-gray-600">
              Browse our selection of rooms and choose the one that fits your
              needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Choose Date & Time</h3>
            <p className="text-gray-600">
              Pick a date and time that works best for you and your team.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Confirm Booking</h3>
            <p className="text-gray-600">
              Review your details and confirm your booking in a few simple
              steps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItWorks;
