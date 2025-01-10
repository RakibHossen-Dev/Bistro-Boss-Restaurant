import Banner from "../components/Banner";
import Category from "../components/Category";
import Poster from "../components/Poster";
import PropularMenu from "../components/PopularMenu";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Poster></Poster>
      <PropularMenu></PropularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
