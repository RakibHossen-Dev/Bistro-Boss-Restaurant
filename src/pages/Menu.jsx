import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import pizzas from "../assets/menu/pizza-bg.jpg";
import salads from "../assets/menu/salad-bg.jpg";
import suops from "../assets/menu/soup-bg.jpg";
import desserts from "../assets/menu/dessert-bg.jpeg";
import PopularMenu from "../components/PopularMenu";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "../components/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="space-y-20 mb-20">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* <Cover
        img={menuImg}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover> */}

      {/* <MenuCategory
        img={menuImg}
        title={"OUR MENU"}
        items={offered}
      ></MenuCategory> */}
      {/* <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER "}
      ></SectionTitle> */}
      {/* dessert */}
      {/* <Cover
        img={desserts}
        title={"DESSERTS"}
        description={"Would you like to try a dish?"}
      ></Cover> */}
      <MenuCategory
        img={desserts}
        title={"dessert"}
        items={dessert}
      ></MenuCategory>

      {/* pizza */}
      {/* <Cover
        img={pizzas}
        title={"PIZZA "}
        description={"Would you like to try a dish?"}
      ></Cover> */}
      <MenuCategory img={pizzas} title={"pizza"} items={pizza}></MenuCategory>

      {/* salad */}
      {/* <Cover
        img={salads}
        title={"SALADS"}
        description={"Would you like to try a dish?"}
      ></Cover> */}
      <MenuCategory title={"salad"} img={salads} items={salad}></MenuCategory>

      {/* soup */}
      {/* <Cover
        img={suops}
        title={"SOUPS"}
        description={"Would you like to try a dish?"}
      ></Cover> */}
      <MenuCategory title={"soup"} img={suops} items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
