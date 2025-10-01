const HeadingSection = ({ subtitle, title, description }) => {
  return (
    <div className="text-center">
      <p className="text-blue-600 font-semibold uppercase">{subtitle}</p>
      <h2 className="text-3xl lg:text-4xl sm:w-2/4 mx-auto font-bold py-5">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 sm:w-2/4 mx-auto "> {description}</p>
      )}
    </div>
  );
};

export default HeadingSection;
