const HeadingSection = ({ sub, title }) => {
  return (
    <div className="md:space-y-2">
      <h3 className="text-2xl font-bold text-gray-700 md:text-5xl">{title}</h3>
      <h5 className="leading-loose text-gray-700 ">{sub}</h5>
    </div>
  );
};

export default HeadingSection;
