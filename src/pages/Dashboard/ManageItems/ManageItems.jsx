import { AiOutlineDelete } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
        }
      }
    });
  };
  const handleUpdateItem = (item) => {};
  return (
    <div className="m-5">
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="bg-white p-5">
        <div className="font-cinzel">
          <h2 className="text-3xl font-semibold">Total items: {menu.length}</h2>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md p-5 bg-white ">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#D1A054] p-10 ">
            <tr className="text-white">
              <th>Id</th>
              <th>ITEM IMAGE </th>
              <th> ITEM NAME</th>
              <th>PRICE </th>
              <th>ACTION </th>
              <th>ACTION </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}

            {menu.map((item, index) => (
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
                  <button onClick={() => handleUpdateItem(item)}>
                    <FiEdit className="text-4xl cursor-pointer p-2 rounded-lg bg-[#D1A054] text-white" />
                  </button>
                </th>
                <th>
                  <button onClick={() => handleDeleteItem(item)}>
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

export default ManageItems;
