import { GrFacebookOption } from "react-icons/gr";
import loginBg from "../assets/others/authentication.png";
import authentication from "../assets/others/authentication2.png";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // const captcharef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(user_captcha_value);
  };

  // const handleGoogleSignIn = () => {
  //   googleSignIn().then((result) => {
  //     console.log(result.user);
  //     navigate("/");
  //   });
  // };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="bg-cover  bg-center  h-screen  flex flex-col  justify-center items-center"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <div className="flex lg:flex-row flex-col justify-center w-11/12 mx-auto items-center gap-5">
          <img className="lg:w-1/2" src={authentication} alt="" />
          <div className="lg:w-[400px]">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <label className="label ">
                  {/* <span className="label-text">Email</span> */}
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  // ref={captcharef}
                  placeholder="Text here"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn bg-[#D1A054B3] btn-xs mt-2"
                >
                  Validate
                </button> */}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  disabled={disabled}
                  className="btn bg-[#D1A054B3] text-white"
                ></input>
              </div>
            </form>
            <div className="text-center">
              <p className="text-[#D1A054] mb-5">
                New here? <Link to="/signup">Create a New Account</Link>
              </p>
              <p className="text-[#444444]"> Or sign in with </p>
              <SocialLogin></SocialLogin>
              {/* <div className="flex items-center justify-center gap-8 mt-2">
                <button>
                  <GrFacebookOption className="text-[#444444] rounded-full text-4xl border border-[#444444] p-2" />
                </button>
                <button onClick={handleGoogleSignIn}>
                  <FaGoogle className="text-[#444444] rounded-full text-4xl border border-[#444444] p-2" />
                </button>
                <button>
                  <FaGithub className="text-[#444444] rounded-full text-4xl border border-[#444444] p-2" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
