import featured from "../assets/home/featured.jpg";
import SectionTitle from "../components/SectionTitle";

const Featured = () => {
  return (
    <div className="relative ">
      <div
        className="bg-cover bg-fixed  bg-center lg:h-screen   flex flex-col  justify-center items-center "
        style={{
          backgroundImage: `url(${featured})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25 z-0"></div>

        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:w-9/12 ">
          <img className="lg:w-1/2 z-10" src={featured} alt="" />
          <div className="lg:w-1/2 text-white z-10">
            <p>March 20, 2025 </p>
            <h4 className="uppercase"> WHERE CAN I GET SOME?</h4>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.{" "}
            </p>
            <button className=" border-b-2 rounded-lg pb-1 uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-black opacity-30 w-full h-full"></div> */}
    </div>
  );
};

export default Featured;
