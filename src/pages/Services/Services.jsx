import { FiActivity, FiCalendar, FiCompass, FiTruck } from "react-icons/fi";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const Services = () => {
  const services = [
    {
      icon: FiCalendar,
      title: "Customizable Settings",
      description:
        "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
      icon: FiCompass,
      title: "Developer-Friendly",
      description:
        "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
    },
    {
      icon: FiActivity,
      title: "Responsive Design",
      description:
        "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
    },
    {
      icon: FiTruck,
      title: "Cloud Integration",
      description:
        "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
    },
  ];

  return (
    <div className="py-10 px-5">
      <div className="container mx-auto">
        <HeadingSection
          subtitle="Services"
          title="Explore Our Range Of Professional Services Tailored To Meet Your Business Needs"
          description="Discover our wide range of professional services, thoughtfully designed to support your business growth and success. From innovative digital solutions to creative strategies, we provide expert guidance and tailored approaches to help you achieve your goals with confidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 py-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl cursor-pointer transition "
            >
              <service.icon className="text-4xl text-blue-600 " />
              <p className="text-gray-600 pt-5">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center"> 
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
