const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="w-11/12 mx-auto flex justify-between  gap-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[118px] h-[104px] "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-[#151515] text-xl">
          {name} ---------------
        </h3>
        <p className="text-[#737373] font-inter">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl font-inter">${price}</p>
    </div>
  );
};

export default MenuItem;
