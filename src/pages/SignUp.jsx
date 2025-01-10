import { GrFacebookOption } from "react-icons/gr";
import loginBg from "../assets/others/authentication.png";
import authentication from "../assets/others/authentication2.png";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          console.log("User profile info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign-Up</title>
      </Helmet>
      <div
        className="bg-cover  bg-center h-screen   flex flex-col  justify-center items-center"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <div className="flex lg:flex-row flex-col justify-center w-11/12 mx-auto items-center gap-5">
          <div className="lg:w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                  // required
                />
                {errors.name && (
                  <span className="mt-2 text-red-400">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="PhotoURL"
                  {...register("PhotoURL", { required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  // required
                />
                {errors.name && (
                  <span className="mt-2 text-red-400">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  // required
                />
                {errors.email && (
                  <span className="mt-2 text-red-400">Email is required</span>
                )}
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  // required
                />
                {errors.password?.type === "required" && (
                  <p className="mt-2 text-red-400">Password is required </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="mt-2 text-red-400">
                    Password must be 6 characters{" "}
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="mt-2 text-red-400">
                    Password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="mt-2 text-red-400">
                    Password must have one uppercase one lower case one number
                    and special characters
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-[#D1A054B3] text-white"
                ></input>
              </div>
            </form>
            <div className="text-center">
              <p className="text-[#D1A054] mb-5">
                Already registered? <Link to="/login"> Go to log in</Link>
              </p>
              <p className="text-[#444444]"> Or sign in with </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <img className="lg:w-1/2" src={authentication} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
