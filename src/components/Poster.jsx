import poster from "../assets/home/chef-service.jpg";

const Poster = () => {
  return (
    <div
      className="bg-cover  bg-center lg:h-screen h-[400px]  flex flex-col  justify-center items-center"
      style={{
        backgroundImage: `url(${poster})`,
      }}
    >
      <div className="bg-white h-[350px] w-10/12 flex flex-col  text-center justify-center items-center">
        <h3 className="text-5xl font-cinzel text-[#151515] mb-5">
          Bistro Boss
        </h3>
        <p className="text-[#151515] font-inter w-9/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Poster;
