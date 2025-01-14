import useCart from "../../../hooks/useCart";
// import SectionTitle from "../components/SectionTitle";
import SectionTitle from "../../../components/SectionTitle";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = Math.ceil(
    cart.reduce((total, item) => total + item.price, 0)
  );

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-5 bg-gray-100 h-screen">
      <SectionTitle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="bg-white p-5">
        <div className="flex items-center justify-between font-cinzel">
          <h2 className="text-3xl font-semibold">
            Total orders: {cart.length}
          </h2>
          <h2 className="text-3xl font-semibold">total price: ${totalPrice}</h2>
          {cart.length ? (
            <button className="px-4 py-2 rounded-md text-white bg-[#D1A054]">
              <Link to="/dashboard/payment">Pay</Link>
            </button>
          ) : (
            <button
              disabled
              className="px-4 py-2 rounded-md text-white bg-[#D1A054]"
            >
              Pay
            </button>
          )}
        </div>
      </div>
      <div className="overflow-x-auto rounded-md p-5 bg-white">
        <table className="table  ">
          {/* head */}
          <thead className="bg-[#D1A054] p-10 ">
            <tr className="text-white">
              <th>Id</th>
              <th>ITEM IMAGE </th>
              <th> ITEM NAME</th>
              <th>PRICE </th>
              <th>ACTION </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}

            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-16 h-16 rounded-full"
                    src={item.image}
                    alt=""
                  />
                  {/* <div className="avatar">
                    <div className="mask mask-squircle rounded-none h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div> */}
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  {/* <button className="btn btn-ghost btn-xs">Delete</button> */}
                  <button onClick={() => handleDelete(item._id)}>
                    <AiOutlineDelete className="text-4xl cursor-pointer p-1 rounded-lg bg-[#B91C1C] text-white" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
