import { Carousel } from "react-responsive-carousel";
const Testimonials = () => {
  return (
    <div>
      <section className="text-center my-10">
        <h2 className="text-3xl font-bold">Customer Testimonials</h2>
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              “The booking process was incredibly smooth and straightforward.
              Highly recommend!”
            </p>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              “Great experience! The room was exactly as described and the
              process was hassle-free.”
            </p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-500">Event Coordinator</p>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Testimonials;
