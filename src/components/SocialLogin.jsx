import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GrFacebookOption } from "react-icons/gr";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-8 mt-2">
        <button>
          <GrFacebookOption className="text-[#444444] rounded-full text-4xl border border-[#444444] p-2" />
        </button>
        <button onClick={handleGoogleSignIn}>
          <FaGoogle className="text-[#444444] rounded-full text-4xl border border-[#444444] p-2" />
        </button>
        <button>
          <FaGithub className="text-[#444444] rounded-full text-4xl border border-[#444444] p-2" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
