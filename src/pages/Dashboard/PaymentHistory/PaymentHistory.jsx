import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);
  return (
    <div className="m-5">
      <SectionTitle
        subHeading={"At a Glance!"}
        heading={" PAYMENT HISTORY"}
      ></SectionTitle>

      <div className="bg-white p-5">
        <div className="flex items-center  font-cinzel">
          <h2 className="text-3xl font-semibold">
            Total Payments: {payments?.length}
          </h2>
        </div>
      </div>

      {payments && (
        <div className="overflow-x-auto rounded-md p-5 bg-white">
          <table className="table  ">
            <thead className="bg-[#D1A054] p-10 ">
              <tr className="text-white">
                <th>Id</th>
                <th> EMAIL</th>
                <th> STATUS</th>
                <th>TOTAL PRICE</th>
                <th>PAYENT DATE</th>
                <th> TRANSACTIONID</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>

                  <td>{payment.email}</td>
                  <td>
                    <p className="bg-red-500 text-center text-sm text-white  rounded-full">
                      {payment.status}
                    </p>
                  </td>
                  <td>${payment.price}</td>
                  <td>{payment.date}</td>
                  <td>{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
