import { useState } from "react";
import orderImg from "../assets/shop/banner2.jpg";
import Cover from "../components/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";
import OrderTab from "../components/OrderTab";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <div className="w-10/12 mx-auto  my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>salad </Tab>
            <Tab> pizza </Tab>
            <Tab> soup </Tab>
            <Tab> dessert</Tab>
            <Tab> drinks </Tab>
          </TabList>
          <TabPanel>
            {/* <div className="grid grid-cols-3 gap-5">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div> */}
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
