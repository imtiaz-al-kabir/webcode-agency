import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const CompanyLogos = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ];
  return (
    <div className="bg-[#f2f4f8] py-10">
      <div className="mx-auto container">
        <HeadingSection
          subtitle="OUR TRUSTED PARTNERS"
          title="Companies We have Worked With"
          description="We've partnered with some of the most innovative and leading companies to bring the best solutions to you."
        />
        <div className="relative overflow-hidden border-y-[1px] border-gray-200 mt-4">
          <div className="flex justify-around space-x-10 py-8 animate-lr">
            {logos.map((logo, ind) => (
              <div
                key={ind}
                className="flex justify-center items-center bg-white rounded-full w-28 h-28 hover:scale-110 transform transition "
              >
                <logo.icon
                  title={logo.name}
                  className="text-blue-600 text-4xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
