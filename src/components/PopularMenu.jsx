// import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-5 items-center">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className=" border-b-2 border-black rounded-lg pb-1 uppercase ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
