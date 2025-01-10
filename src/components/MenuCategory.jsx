import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import Cover from "./Cover";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={img}
          title={title}
          description={"Would you like to try a dish?"}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-5 items-center my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/order/${title}`}>
          <button className=" border-b-2 border-black rounded-lg pb-1 uppercase ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
