import { Fade } from "react-reveal";
import teamMember1 from "../assets/genious.png";
import teamMember2 from "../assets/genious.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-8">
      <section className="mb-16 text-center">
        <Fade bottom>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our mission is to provide an exceptional meeting room booking
            experience, ensuring that every booking is seamless, secure, and
            meets the highest standards of quality.
          </p>
        </Fade>
      </section>
      <section className="mb-16">
        <Fade bottom>
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img
                src={teamMember1}
                alt="Team Member 1"
                className="w-full h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-2">
                Jane is the visionary behind our platform, dedicated to creating
                the best meeting room experience for our users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img
                src={teamMember2}
                alt="Team Member 2"
                className="w-full h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-gray-500 mt-2">
                John is responsible for the technical aspects of our platform,
                ensuring that everything runs smoothly and efficiently.
              </p>
            </div>
          </div>
        </Fade>
      </section>
      <section>
        <Fade bottom>
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our story began with a simple idea: to make booking meeting rooms as
            easy and efficient as possible. From our humble beginnings, we have
            grown into a trusted platform, continuously improving and expanding
            our services to meet the needs of our users.
          </p>
        </Fade>
      </section>
    </div>
  );
};

export default AboutUs;
