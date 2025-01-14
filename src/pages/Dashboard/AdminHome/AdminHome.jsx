import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GoPeople } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // console.log(stats);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });
  return (
    <div className="m-5">
      <h2 className="text-4xl font-semibold font-cinzel">Hi,Welcome Back</h2>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-8">
        {stats && (
          <>
            <div className="stats">
              <div className="stat">
                <div className="avatar placeholder">
                  <div className="bg-success/20 text-success size-10 rounded-full">
                    <span className="icon-[tabler--package] size-6"></span>
                  </div>
                </div>
                <div className="stat-value mb-1">Order</div>
                {stats?.orders && (
                  <div className="stat-title">{stats?.orders} orders</div>
                )}
                <div
                  className="progress bg-success/10 h-2"
                  role="progressbar"
                  aria-label="Order Progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar progress-success w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="stats ">
              <div className="stat">
                <div className="avatar placeholder">
                  <div className="bg-warning/20 text-warning size-10 rounded-full">
                    <span className="icon-[tabler--cash] size-6"></span>
                  </div>
                </div>
                <div className="stat-value mb-1">Revenue</div>
                {stats.revenue && (
                  <div className="stat-title">{stats.revenue}$</div>
                )}
                <div
                  className="progress bg-warning/10 h-2"
                  role="progressbar"
                  aria-label="Revenue Progressbar"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar progress-warning w-2/5"></div>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="avatar placeholder">
                  <div className="bg-success/20 text-success size-10 rounded-full">
                    <GoPeople />
                  </div>
                </div>
                <div className="stat-value mb-1"> Customers</div>
                {stats.users && <div className="stat-title">{stats.users}</div>}
                <div
                  className="progress bg-success/10 h-2"
                  role="progressbar"
                  aria-label="Order Progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar progress-info w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="stats ">
              <div className="stat">
                <div className="avatar placeholder">
                  <div className="bg-error/20 text-error size-10 rounded-full">
                    <MdProductionQuantityLimits />
                  </div>
                </div>
                <div className="stat-value mb-1">Products </div>
                {stats.menuItems && (
                  <div className="stat-title">{stats.menuItems}</div>
                )}
                <div
                  className="progress bg-error/10 h-2"
                  role="progressbar"
                  aria-label="Invoice Progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar progress-error w-[73%]"></div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* BarChart */}
        <div className="flex justify-between items-center gap-5 mt-8">
          <div>
            <BarChart
              width={500}
              height={450}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
            {/* </ResponsiveContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
