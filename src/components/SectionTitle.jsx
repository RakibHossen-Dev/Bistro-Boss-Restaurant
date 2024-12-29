const sectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-8 w-9/12 md:w-4/12 mx-auto text-center">
      <p className="text-[#D99904] text-xl font-inter mb-4">
        ---{subHeading}---
      </p>
      <h3 className="text-4xl uppercase font-inter border-y-4 py-4 text-[#151515]">
        {heading}
      </h3>
    </div>
  );
};

export default sectionTitle;
