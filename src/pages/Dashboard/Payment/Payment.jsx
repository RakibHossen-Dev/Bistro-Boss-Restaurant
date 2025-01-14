import { FaRegCreditCard } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Paymet_Gateway_PK);

const Payment = () => {
  return (
    <div className="m-5">
      <SectionTitle
        subHeading={"Please pay to eat"}
        heading={"PAYMENT "}
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
      {/* <div className="flex lg:flex-row flex-col justify-center gap-5 items-center  mb-5 ">
        <label className="input input-bordered rounded-sm lg:w-1/2 flex items-center gap-2">
          <FaRegCreditCard />
          <input type="text" className="  rounded-sm" placeholder="Username" />
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered  rounded-sm lg:w-1/2 w-full "
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="text-xl font-semibold text-white px-10 bg-[#835D23] py-2">
          Pay
        </button>
      </div> */}
    </div>
  );
};

export default Payment;
