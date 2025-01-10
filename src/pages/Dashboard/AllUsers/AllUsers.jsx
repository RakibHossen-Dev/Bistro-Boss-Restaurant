import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
    <div className="mt-5">
      <SectionTitle
        subHeading={"How many??"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>

      <div className="bg-white p-5">
        <div className="flex items-center  font-cinzel">
          <h2 className="text-3xl font-semibold">Total users:{users.length}</h2>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md p-5 bg-white">
        <table className="table  ">
          {/* head */}
          <thead className="bg-[#D1A054] p-10 ">
            <tr className="text-white">
              <th>Id</th>
              <th>NAME </th>
              <th> EMAIL</th>
              <th>ROLE </th>
              <th>ACTION </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}

            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}>
                      <IoIosPeople className="text-4xl cursor-pointer p-1 rounded-lg bg-[#D1A054] text-white" />
                    </button>
                  )}
                </th>
                <th>
                  {/* <button className="btn btn-ghost btn-xs">Delete</button> */}
                  <button onClick={() => handleDeleteUser(user)}>
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

export default AllUsers;
