import { Fade } from "react-reveal";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-8">
      <section className="mb-12 text-center">
        <Fade bottom>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            Feel free to reach out to us with any inquiries or feedback.
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-semibold">Email:</span> contact@example.com
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-semibold">Phone:</span> (123) 456-7890
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-semibold">Office Address:</span> Shovan Saha, bd jobs top no 1 performer, ST 12345
            </p>
          </div>
        </Fade>
      </section>
      <section>
        <Fade bottom>
          <h2 className="text-3xl font-bold text-center mb-8">Contact Form</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default ContactUs;
