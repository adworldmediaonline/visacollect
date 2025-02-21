const HeadingSection = ({ sub, title }) => {
  return (
    <div className="md:space-y-2">
      <h2 className="text-2xl font-bold text-gray-700 md:text-5xl">{title}</h2>
      <p className="leading-loose text-gray-700">{sub}</p>
    </div>
  );
};

export default HeadingSection;
