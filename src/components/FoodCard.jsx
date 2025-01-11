import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const axiosSecure = useAxiosSecure();

  const [, refetch] = useCart();
  // console.log("Food User", user);
  const handleAddToCart = (food) => {
    // console.log(food, user?.email);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          // toast.success(`${name} , Added to the cart`);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} , Added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
      // console.log(cartItem);
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
        }
      });
    }
  };
  return (
    <div className="md:h-[450px] bg-[#F3F3F3] relative flex flex-col">
      <img className="w-full h-[290px]" src={image} alt={name} />
      <p className="bg-[#BB8506] text-center absolute right-2 top-2 text-white py-1 px-4">
        ${price}
      </p>
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-start lg:pb-0 pb-5">{recipe.slice(0, 70)}...</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="uppercase border-b-2 border-[#BB8506] hover:bg-[#111827] ease-linear duration-200 bg-[#E8E8E8] text-[#BB8506] 
        mx-20 px-6 py-2 mt-auto"
        >
          add to cart
        </button>
      </div>
    </div>
  );
  z;
};

export default FoodCard;
