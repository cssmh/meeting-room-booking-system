import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import ItWorks from "./ItWorks";
import FeaturedRooms from "./FeaturedRooms";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedRooms />
      <ItWorks />
      <ChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
