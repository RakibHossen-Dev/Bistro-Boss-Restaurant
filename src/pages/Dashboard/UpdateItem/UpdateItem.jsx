import React from "react";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, recipe, image, category, price, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const axiosSecure = useAxiosSecure();
  const item = useLoaderData();
  console.log(item);
  //   const { name, category, recipe, price, image } = item;

  //   console.log("Tis is upadate item", item);

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Item has been added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log(res.data);
  };
  return (
    <div className="m-5">
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"UPDATE ITEM"}
      ></SectionTitle>
      <div className="max-w-[992px] bg-gray-200 p-3 md:p-6 mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Recipe name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              placeholder="Recipe name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold"> Category*</span>
              </label>

              <select
                {...register("category")}
                defaultValue={category}
                className="select select-bordered rounded-none w-full "
              >
                <option disabled value="default">
                  Select Your Category
                </option>
                <option>pizza</option>
                <option>soup</option>
                <option>dessert</option>
                <option>salad</option>
                <option>drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered rounded-none"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Recipe Details* </span>
            </label>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea textarea-bordered rounded-none w-full"
              placeholder="Recipe Details"
              rows="6"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              //   defaultValue={image}
              className="file-input rounded-none mb-3 "
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="py-2 px-4 flex items-center gap-2 text-white bg-[#835D23]">
              Update Recipe Details <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
